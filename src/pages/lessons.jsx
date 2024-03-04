import React from 'react'
import styles from './styles.module.css'

function Lessons() {
  return (
    <div>  <div className={`${styles.container} ${styles.image1}`}>
    <div className={styles.box}>Lesson 1</div>
    <div className={styles.box}>Lesson 2</div>
    <div className={styles.box}>Lesson 3</div>
  </div></div>
  );
};

export default Lessons;