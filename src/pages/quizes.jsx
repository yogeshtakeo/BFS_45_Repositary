import React from 'react'
import styles from './styles.module.css'

function Quizes() {
  return (
    <div className={`${styles.container} ${styles.image1}`}>
        <div className={styles.box}>Quiz 1</div>
        <div className={styles.box}>Quiz 2</div>
        <div className={styles.box}>Quiz 3</div>
    </div>
  )
}

export default Quizes;