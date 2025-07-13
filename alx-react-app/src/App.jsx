import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/* 👉 1) ADD THIS LINE */
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 👉 2) RENDER THE COMPONENT */}
      <WelcomeMessage />

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
        {/* … existing content … */}
      </div>
    </>
  );
}

export default App;
