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
            resolve(userRole);  
          } else {
            reject("No role found for user");  
          }
        
        } catch (error) {
          reject("Error fetching user role: " + error); 
        }
      } else {
        reject("No user logged in");  
      }

      unsubscribe(); 
    });
  });
};
