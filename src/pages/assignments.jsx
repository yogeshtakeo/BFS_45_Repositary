import React from 'react';
import styles from './styles.module.css';

function Assignments() {
  return (
    <div className={`${styles.container} ${styles.image1}`}>
      
      <div className={styles.box}>Assignment 1</div>
      <div className={styles.box}>Assignment 2</div>
      <div className={styles.box}>Assignment 3</div>
    </div>
  );
}

export default Assignments;