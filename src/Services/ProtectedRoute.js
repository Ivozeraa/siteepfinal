// src/Services/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = auth.currentUser; // Verifica se o usuário está autenticado
      if (user) {
        try {
          // Verifica se o usuário possui um documento no Firestore, mas não verifica o papel
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Erro ao verificar autenticação do usuário:", error);
        }
      }
      setLoading(false);
    };

    checkUserAuthentication();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  // Se o usuário não estiver autenticado, redireciona para a Home
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Renderiza o conteúdo protegido se o usuário estiver autenticado
  return children;
};

export default ProtectedRoute;
