import React from 'react'
import './styles/App.css'

function App() {
  return (
    <>
    <div className='container'>
      <header>
        <h1>Welcome to My Website</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed vitae eros vehicula, volutpat magna ac, posuere nisl.<br/> Ut feugiat rutrum velit, non bibendum est suscipit ac.</p>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Digital Marketing</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
      </div>
    </>
  )
}

export default App