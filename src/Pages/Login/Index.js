import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Services/firebase';
import { Home } from '../Home';
import { UserInfoModal } from '../../components/UserInforModal';

export const Index = () => {
    const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = auth.currentUser || localStorage.getItem('userName');
        if (!checkAuth) {
            navigate('/Home');
        } else {
            setShowModal(true); // Exibir o modal se o usuário está autenticado e é a primeira vez na página
        }
    }, [navigate]);

    const handleModalClose = () => {
        setShowModal(false); // Fecha o modal após o usuário enviar as informações
    };

    return (
        <>
            <Home />
            {showModal && <UserInfoModal onClose={handleModalClose} />} 

        </>
    );
};
