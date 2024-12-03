import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Services/firebase';
import { Home } from '../Home';

export const Index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = auth.currentUser || localStorage.getItem('userName');
        if (!checkAuth) {
            navigate('/Home');
        }
    }, [navigate]);


    return (
        <>
            <Home />
        </>
    );
};
