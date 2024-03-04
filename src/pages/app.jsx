import React from 'react'
import Navigation from '../component/Navigation.comp'
import { Route, Routes } from 'react-router-dom'
import Book from './book';
import Assignments from './assignments';
import Lessons from './lessons';
import Quizes from './quizes';
import styles from './styles.module.css'



function App() {
  return (
   <div className={`${styles.container} ${styles.image1}`}>
    <Navigation/>
    <Routes >
      <Route path="/" element={<Book/>} />
      <Route path="/assignments" element={<Assignments />}/>
      <Route path="/lessons" element ={<Lessons />}/>
      <Route path="/quizes" element ={<Quizes />} />    
    </Routes>
   </div>
  );
}

export default App;