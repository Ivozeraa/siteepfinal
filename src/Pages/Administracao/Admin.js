import React, { useState, useEffect } from "react";
import { db } from "../../Services/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import Styles from "../../Css/Pages/Admin.module.css";

export function Administracao() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [rankingData, setRankingData] = useState([]);
  const [newPortugues, setNewPortugues] = useState("");
  const [newMatematica, setNewMatematica] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    const fetchRanking = () => {
      const unsubscribe = onSnapshot(collection(db, "ranking"), (snapshot) => {
        const ranking = snapshot.docs.map((doc) => ({
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

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
  };

  const handleSaveUser = async () => {
    try {
      const userDoc = doc(db, "users", selectedUser.id);
      await updateDoc(userDoc, { role: newRole });

      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? { ...user, role: newRole } : user
      );

      setUsers(updatedUsers);
      setSelectedUser(null);
      setModalMessage("Função do usuário atualizada com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage(`Erro ao salvar: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleDeleteRanking = async (id) => {
    try {
      await deleteDoc(doc(db, "ranking", id));
      setRankingData(rankingData.filter((item) => item.id !== id));
      setModalMessage("Registro de ranking removido com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage(`Erro ao remover registro: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleEditRanking = (index) => {
    setEditingIndex(index);
    const item = rankingData[index];
    setNewPortugues(item.portugues);
    setNewMatematica(item.matematica);
  };

  const handleSaveRanking = async () => {
    try {
      const item = rankingData[editingIndex];
      const rankingDoc = doc(db, "ranking", item.id);
      await updateDoc(rankingDoc, {
        portugues: newPortugues,
        matematica: newMatematica,
      });

      const updatedRankingData = [...rankingData];
      updatedRankingData[editingIndex] = {
        ...updatedRankingData[editingIndex],
        portugues: newPortugues,
        matematica: newMatematica,
      };

      setRankingData(updatedRankingData);
      setEditingIndex(null);
      setModalMessage("Ranking atualizado com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage(`Erro ao salvar ranking: ${error.message}`);
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRanking = rankingData.filter((item) =>
    item.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const usersToShow = filteredUsers.slice(0, 10);

  return (
    <div className={Styles.adminContainer}>
      <h2 className={Styles.tituloDashboard}>Dashboard de Administração</h2>

      <h3 className={Styles.tituloAdmin}>Gerenciar Usuários</h3>
      <input
        type="text"
        placeholder="Buscar usuário"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={Styles.searchInput}
      />
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {usersToShow.map((user) => (
            <tr key={user.id} className={Styles.Tr}>
              <td className={Styles.Td}>{user.name}</td>
              <td className={Styles.Td}>{user.email}</td>
              <td className={Styles.Td}>
                {selectedUser?.id === user.id ? (
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="professor">Professor</option>
                    <option value="aluno">Aluno</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td className={Styles.Td}>
                {selectedUser?.id === user.id ? (
                  <button onClick={handleSaveUser}>Salvar</button>
                ) : (
                  <button onClick={() => handleEditUser(user)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className={Styles.tituloAdmin}>Gerenciar Ranking</h3>
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Curso</th>
            <th>Português</th>
            <th>Matemática</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {filteredRanking.map((item, index) => (
            <tr key={item.id} className={Styles.Tr}>
              <td className={Styles.Td}>{item.curso}</td>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={newPortugues}
                    onChange={(e) => setNewPortugues(e.target.value)}
                  />
                ) : (
                  item.portugues
                )}
              </td>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={newMatematica}
                    onChange={(e) => setNewMatematica(e.target.value)}
                  />
                ) : (
                  item.matematica
                )}
              </td>
              <td className={Styles.Td}>
                {editingIndex === index ? (
                  <button onClick={handleSaveRanking}>Salvar</button>
                ) : (
                  <button onClick={() => handleEditRanking(index)}>Editar</button>
                )}
                
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
