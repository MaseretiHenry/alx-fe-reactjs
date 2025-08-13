import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your pages
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app-container">
        <h1>Hello, Holberton!</h1>
        <div className="card">
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
