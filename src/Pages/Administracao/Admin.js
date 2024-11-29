import React, { useState, useEffect } from 'react';
import { db } from '../../Services/firebase';
import { collection, getDocs, updateDoc, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import Styles from '../../Css/Pages/Admin.module.css';

export function Administracao() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState('');
  const [rankingData, setRankingData] = useState([]);
  const [newNota, setNewNota] = useState('');
  const [newCurso, setNewCurso] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    const fetchRanking = () => {
      const unsubscribe = onSnapshot(collection(db, 'ranking'), (snapshot) => {
        const ranking = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRankingData(ranking);
      });

      return () => unsubscribe();
    };

    fetchUsers();
    fetchRanking();
  }, []);

  const handleAssignRole = async () => {
    if (!selectedUser || !newRole) {
      alert('Selecione um usuário e um cargo válido.');
      return;
    }

    try {
      const userRef = doc(db, 'users', selectedUser.id);
      await updateDoc(userRef, { role: newRole });
      alert(`Cargo atualizado para ${newRole} com sucesso!`);
      setNewRole('');
      setSelectedUser(null);
    } catch (error) {
      alert(`Erro ao atualizar o cargo: ${error.message}`);
    }
  };

  const handleEditRanking = (index) => {
    setEditingIndex(index);
    setNewNota(rankingData[index].nota);
    setNewCurso(rankingData[index].curso);
  };

  const handleSaveRanking = async (id, index) => {
    if (isNaN(newNota) || newNota < 0 || newNota > 100) {
      setModalMessage("A nota deve ser um número entre 0 e 100.");
      setShowModal(true);
      return;
    }

    try {
      const docRef = doc(db, 'ranking', id);
      await updateDoc(docRef, { nota: Number(newNota), curso: newCurso });
      const updatedRanking = [...rankingData];
      updatedRanking[index].nota = Number(newNota);
      updatedRanking[index].curso = newCurso;
      setRankingData(updatedRanking);
      setEditingIndex(null);
      setModalMessage("Curso e nota atualizados com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage(`Erro ao atualizar: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleDeleteRanking = async (id) => {
    try {
      await deleteDoc(doc(db, 'ranking', id));
      setRankingData(rankingData.filter(item => item.id !== id));
      setModalMessage("Curso removido com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage(`Erro ao remover curso: ${error.message}`);
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRanking = rankingData.filter(item =>
    item.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Styles.adminContainer}>
      <h2 className={Styles.tituloDashboard}>Dashboard de Administração</h2>

      <div className={Styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar por nome ou email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={Styles.searchInput}
        />
      </div>

      <h3 className={Styles.tituloAdmin}>Gerenciar Cargos de Usuários</h3>
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo Atual</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {filteredUsers.map(user => (
            <tr key={user.id} className={Styles.Tr}>
              <td className={Styles.Td}>{user.name || 'N/A'}</td>
              <td className={Styles.Td}>{user.email}</td>
              <td className={Styles.Td}>{user.role || 'Nenhum'}</td>
              <td className={Styles.Td}>
                <button
                  onClick={() => setSelectedUser(user)}
                  className={Styles.addButton}
                >
                  Selecionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <h3>Atribuir Cargo</h3>
            <p>
              <strong>Usuário Selecionado:</strong> {selectedUser.name || 'N/A'} ({selectedUser.email})
            </p>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className={Styles.input}
            >
              <option value="">Selecione um cargo</option>
              <option value="admin">Admin</option>
              <option value="professor">Professor</option>
            </select>
            <button
              onClick={handleAssignRole}
              className={Styles.addButton}
            >
              Atribuir Cargo
            </button>
            <button
              onClick={() => setSelectedUser(null)}
              className={Styles.modalButton}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <h3 className={Styles.tituloAdmin}>Gerenciar Ranking</h3>
      <input
        type="text"
        placeholder="Buscar curso"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={Styles.searchInput}
      />
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Curso</th>
            <th>Nota</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {filteredRanking.map((item, index) => (
            <tr key={item.id} className={Styles.Tr}>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newCurso}
                    onChange={(e) => setNewCurso(e.target.value)}
                  />
                ) : (
                  item.curso
                )}
              </td>
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
                <button onClick={() => handleDeleteRanking(item.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <p>{modalMessage}</p>
            <button onClick={closeModal} className={Styles.modalButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
