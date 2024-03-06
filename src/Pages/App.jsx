import {Route, Routes} 
from "react-router-dom";
import React, {useEffect} from 'react';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import NavigationBar from "../Components/NavElements.jsx";



function PG_Title(){
  useEffect(() => {document.title = 'MultiPage Website'},[])
};


export default function App() {
  PG_Title()
  return (
    <>
    <NavigationBar />
    <div>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
  </>
  );
}
