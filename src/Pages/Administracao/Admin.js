import React, { useState, useEffect } from 'react';
import { db } from '../../Services/firebase';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import Styles from '../../Css/Pages/Admin.module.css';

export function Administracao() {
  const [professors, setProfessors] = useState([]);
  const [newProfessor, setNewProfessor] = useState('');
  const [rankingData, setRankingData] = useState([]);
  const [newNota, setNewNota] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

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

    const fetchRanking = async () => {
      const querySnapshot = await getDocs(collection(db, 'ranking'));
      const ranking = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRankingData(ranking);
    };

    fetchProfessors();
    fetchRanking();
  }, []);

  const handleAddProfessor = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: newProfessor,
        role: 'professor',
      });
      alert('Professor adicionado com sucesso!');
      setNewProfessor('');
    } catch (error) {
      console.error("Erro ao adicionar professor:", error);
    }
  };

  const handleEditRanking = (index) => {
    setEditingIndex(index);
    setNewNota(rankingData[index].nota);
  };

  const handleSaveRanking = async (id, index) => {
    try {
      const docRef = doc(db, 'ranking', id);
      await updateDoc(docRef, { nota: newNota });
      const updatedRanking = [...rankingData];
      updatedRanking[index].nota = newNota;
      setRankingData(updatedRanking);
      setEditingIndex(null);
      setNewNota('');
    } catch (error) {
      console.error('Erro ao atualizar nota:', error);
    }
  };

  return (
    <div className={Styles.adminContainer}>
      <h2>Dashboard de Administração</h2>

      {/* Adicionar professor */}
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

      {/* Gerenciar Ranking */}
      <h3>Gerenciar Ranking</h3>
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Curso</th>
            <th>Nota</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {rankingData.map((item, index) => (
            <tr key={item.id} className={Styles.Tr}>
              <td className={Styles.Td}>{item.curso}</td>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <input 
                    type="text" 
                    value={newNota}
                    onChange={(e) => setNewNota(e.target.value)} 
                  />
                ) : (
                  item.nota
                )}
              </td>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <button onClick={() => handleSaveRanking(item.id, index)}>
                    Salvar
                  </button>
                ) : (
                  <button onClick={() => handleEditRanking(index)}>
                    Editar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
