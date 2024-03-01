import React from 'react'
import styles from './styles.module.css'


function App() {
  return (
    <div className={styles.container}>

    <div className={`${styles.box} ${styles.box1}`}>This is my Box 1 </div>
    <p className={`${styles.box} ${styles.box2}`}>This is my Box 2</p>
    <div className={`${styles.box} ${styles.box3}`}>This is my Box 3</div>
    <div className={`${styles.box} ${styles.box4}`}>This is my Box 4</div>
    <input type="text" className={styles.textInput} placeholder='Write your name here'/>
    <a href="https://www.youtube.com" className={styles.linkcolor}>Link</a>

    </div>
  )
}

export default App