import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* --- Your new components --- */}
      <Header />
      <MainContent />
      <Footer />

      {/* --- Optional: keep the original Vite demo below --- */}
      <div style={{ marginTop: '2rem' }}>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>
      </div>
    </>
  );
}

export default App;
