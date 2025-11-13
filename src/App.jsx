import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Education from './pages/Education';
import './App.css';

function App() {
  return (
    <Router basename="/my-website">  {/* Add basename here */}
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">Tristan Clayman's Portfolio</h1>
            <div className="nav-menu">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/work" className="nav-link">Projects</Link>
              <Link to="/education" className="nav-link">Education</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <p>Let's connect!</p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/tristan-c-69162b36a/">LinkedIn</a>
              <a href="https://github.com/Tris1997">GitHub</a>
              <a href="mailto:tristanclayman97@gmail.com">Email</a>
            </div>
            <p className="footer-copyright"></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;