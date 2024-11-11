import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUserRole } from './AuthService'; // Importe o serviço

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const role = await getCurrentUserRole();  // Espera o papel ser retornado
        setUserRole(role);
      } catch (error) {
        console.error(error);  // Caso algo dê errado, exibe o erro no console
        setUserRole(null);  // Defina o papel como null se houver erro
      } finally {
        setLoading(false);  // Finaliza o carregamento
      }
    };

    fetchUserRole();  // Chama a função para verificar o papel do usuário
  }, []);  // O useEffect agora só roda uma vez após o componente ser montado

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;  // Redireciona se o papel não for válido
  }

  return children;  // Caso o papel do usuário seja válido, renderiza os filhos
};

export default ProtectedRoute;
