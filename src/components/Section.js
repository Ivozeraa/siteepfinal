import React from 'react';
import styles from '../Css/Section.module.css'; // Importa o arquivo de estilo
import Titulo from './Titulo';

export function Section (props)  {
  return (
    <div className={styles.Section}>
      <Titulo/>
    </div>
  );
};

