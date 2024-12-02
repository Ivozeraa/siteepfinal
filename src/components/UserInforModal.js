import React, { useState } from 'react';
import styles from '../Css/UserInfoModal.module.css';
import { storage, ref, uploadBytes, getDownloadURL } from '../Services/firebase';

export const UserInfoModal = ({ onClose, setUserPhoto, user }) => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoURL = URL.createObjectURL(file);
            setPhoto(photoURL);
            setUserPhoto(photoURL);
        }
    };

    const handleSubmit = async () => {
        if (photo) {
            const storageRef = ref(storage, `user-photos/${user.uid}.jpg`);
            const response = await fetch(photo);
            const blob = await response.blob();

            uploadBytes(storageRef, blob).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    localStorage.setItem("userPhoto", downloadURL);
                    setUserPhoto(downloadURL);
                });
            }).catch((error) => {
                console.error("Erro ao carregar a foto: ", error);
            });
        }
        onClose();
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
