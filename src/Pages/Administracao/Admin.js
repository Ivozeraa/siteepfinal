import React, { useState, useEffect } from 'react';
import { db } from '../../Services/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Styles from '../../Css/Pages/Admin.module.css';

export function Administracao() {
  const [professors, setProfessors] = useState([]);
  const [newProfessor, setNewProfessor] = useState('');

  useEffect(() => {
    const fetchProfessors = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const profList = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().role === 'professor') {
          profList.push(doc.data());
        }
      });
      setProfessors(profList);
    };

    fetchProfessors();
  }, []);

  const handleAddProfessor = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: newProfessor,
        role: 'professor'
      });
      alert('Professor adicionado com sucesso!');
      setNewProfessor('');
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
    }
  };

  return (
    <div className={Styles.adminContainer}>
      <h2>Dashboard de Administração</h2>
      <div className={Styles.addProfessor}>
        <input 
          type="text" 
          placeholder="Nome do professor"
          value={newProfessor}
          onChange={(e) => setNewProfessor(e.target.value)}
          className={Styles.input}
        />
        <button onClick={handleAddProfessor} className={Styles.addButton}>
          Adicionar Professor
        </button>
      </div>
      <h3>Professores Atuais</h3>
      <ul>
        {professors.map((prof, index) => (
          <li key={index}>{prof.name}</li>
        ))}
      </ul>
    </div>
  );
}
