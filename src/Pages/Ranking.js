import React, { useState, useEffect } from 'react';
import { db } from '../Services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Styles from "../Css/Pages/Ranking.module.css";
import Titulo from "../components/Titulo";

export function Ranking() {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ranking'));
        const ranking = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRankingData(ranking);
      } catch (error) {
        console.error('Erro ao buscar dados do ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className={Styles.Ranking}>
      <Titulo titulo="Ranking Escolar" />
      <table className={Styles.Table}>
        <thead className={Styles.Thead}>
          <tr>
            <th>Curso</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody className={Styles.Tbody}>
          {rankingData.map((item) => (
            <tr key={item.id} className={Styles.Tr}>
              <td className={Styles.Td}>{item.curso}</td>
              <td className={Styles.Td}>{item.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
