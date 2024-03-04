import React from 'react'
import styles from './styles.module.css'

function Book() {
  return (
    <div className={`${styles.container} ${styles.image1}`}>
    <h2>Study materials are in Lessons</h2>
    <h2>All quizes you need to do are in Quizes</h2>
    <h2>All the assignments for this week are in Assignments</h2>
    </div>
    
  )
}

export default Book;