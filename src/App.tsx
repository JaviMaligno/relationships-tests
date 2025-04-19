import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { TestProvider } from './contexts/TestContext';
import LoveLanguageTest from './components/LoveLanguageTest';
import AttachmentStyleTest from './components/AttachmentStyleTest';
import Resources from './components/Resources';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Relationship Self-Assessment Tests</h1>
        </header>

        <TestProvider>
          <main className="App-main">
            <nav className="test-tabs">
              <NavLink 
                to="/"
                className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
              >
                Love Languages Test
              </NavLink>
              <NavLink 
                to="/attachment"
                className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
              >
                Attachment Style Test
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
              >
                Resources
              </NavLink>
            </nav>

            <div className="test-container">
              <Routes>
                <Route path="/" element={<LoveLanguageTest />} />
                <Route path="/attachment" element={<AttachmentStyleTest />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </div>
          </main>
        </TestProvider>

        <footer className="App-footer">
          <p>© 2025 Self-Assessment Tests</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            {' | '}
            <Link to="/privacy">Privacy Policy</Link>
            {' | '}
            <Link to="/contact">Contact Us</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 