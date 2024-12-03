import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUserRole } from './AuthService'; 

//Não mexe nessa bagaça, tá funcionado 

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const role = await getCurrentUserRole();  
        setUserRole(role);
      } catch (error) {
        console.error(error); 
        setUserRole(null);  
      } finally {
        setLoading(false);  
      }
    };

    fetchUserRole();  
  }, []);  

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;  
  }

  return children;  
};

export default ProtectedRoute;
