import React, { useState } from 'react';
import styles from '../Css/UserInfoModal.module.css';

export const UserInfoModal = ({ onClose, setUserPhoto }) => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoURL = URL.createObjectURL(file); // Preview da imagem local
            setPhoto(photoURL);
            setUserPhoto(photoURL); // Atualiza a foto do usuário
        }
    };

    const handleSubmit = () => {
        // Processar o envio da imagem para o banco ou Firebase
        localStorage.setItem("userPhoto", photo); // Persistir a foto no localStorage
        onClose(); // Fecha o modal
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>Atualizar Foto</h2>

                <input
                    className={styles.inputField}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />

                {photo && <img src={photo} alt="Preview" className={styles.previewImage} />}

                <button className={styles.submitButton} onClick={handleSubmit}>
                    Enviar
                </button>
            </div>
        </div>
    );
};
