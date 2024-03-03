import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header  />
    <Routes>
    
          <Route path="/" element={<Body/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App