import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
          <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '15px', color: '#fff' }}>About</Link>
          <Link to="/services" style={{ marginRight: '15px', color: '#fff' }}>Services</Link>
          <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
