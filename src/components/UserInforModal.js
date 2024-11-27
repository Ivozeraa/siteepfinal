import React, { useState } from 'react';
import styles from '../Css/UserInfoModal.module.css';

export const UserInfoModal = ({ onClose, setUserPhoto }) => {
    const [course, setCourse] = useState('');
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file)); // Preview da imagem local
            setUserPhoto(URL.createObjectURL(file)); // Atualiza foto no Header
        }
    };

    const handleSubmit = () => {
        // Processar o envio da imagem e curso para o banco ou Firebase
        onClose(); // Fecha o modal
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>Atualizar Informações</h2>

                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Curso"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />

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
