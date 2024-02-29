import React from 'react';
import img from './assets/mountfuji.jpg';
import img1 from './assets/mteverest.jpg';
import Button from './components/button';
import './App.css'; // Import global styles directly

function App() {
  return (
    <>
      <h1>Beautiful Mountains</h1>
      <h3>Click on the pictures to learn more</h3>
      
      <div>
        <h2>Mount Fuji</h2>
        <a href="https://en.wikipedia.org/wiki/Mount_Fuji" target="_blank">
          <img src={img} className='image' alt="Mount Fuji" />
        </a>
      </div>

      <div>
        <h2>Mount Everest</h2>
        <a href="https://en.wikipedia.org/wiki/Mount_Everest" target="_blank">
          <img src={img1} alt="Mount Everest" />
        </a>
      </div>
      
      <Button /> {/* Render Button component */}
    </>
  );
}

export default App;