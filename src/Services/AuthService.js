// src/Services/AuthService.js
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const getCurrentUserRole = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userRole = docSnap.data().role;
            resolve(userRole);  // Resolve a Promise com o papel do usuário
          } else {
            reject("No role found for user");  // Rejeita a Promise caso o papel não exista
          }
        } catch (error) {
          reject("Error fetching user role: " + error);  // Rejeita em caso de erro ao buscar o papel
        }
      } else {
        reject("No user logged in");  // Rejeita caso não haja usuário autenticado
      }

      unsubscribe();  // Garantir que o "unsubscribe" seja chamado após a verificação
    });
  });
};
