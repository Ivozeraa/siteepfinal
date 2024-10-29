import React, { useState } from 'react';
import styles from '../Css/UserInfoModal.module.css';

export const UserInfoModal = ({ onClose }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isStudent, setIsStudent] = useState(false);
    const [course, setCourse] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = () => {
        // Processamento das informações aqui
        onClose(); // Fecha o modal após o envio
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>Informações do Usuário</h2>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={styles.inputField}
                    type="number"
                    placeholder="Idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label>
                    Estuda ou Estudou na EEEP?
                    <input
                        type="checkbox"
                        checked={isStudent}
                        onChange={(e) => setIsStudent(e.target.checked)}
                    />
                </label>
                {isStudent && (
                    <input
                        className={styles.inputField}
                        type="text"
                        placeholder="Curso"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                )}
                <input
                    className={styles.inputField}
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
                <button className={styles.submitButton} onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    );
};


