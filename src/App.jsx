import React from 'react';
// import { userState } from React;
import MainLayout from './layout/MainLayout';

function App() {
  return (

    <MainLayout>
      <div className="app">
        <header>
          <h1>Welcome Home</h1>
        </header>
        <main>
          <p>This is a simple React application.</p>
        </main>
        <footer>
          <p>Footer content goes here.</p>
        </footer>
      </div>

    </MainLayout>

  );
}

export default App;

