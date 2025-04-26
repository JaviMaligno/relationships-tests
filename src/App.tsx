import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { TestProvider } from './contexts/TestContext';
import LoveLanguageTest from './components/LoveLanguageTest';
import AttachmentStyleTest from './components/AttachmentStyleTest';
import Resources from './components/Resources';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import TermsPage from './components/Pages/TermsPage';
import DisclaimerPage from './components/Pages/DisclaimerPage';
import Footer from './components/Layout/Footer';
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
                to="/attachment-styles"
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
                <Route path="/love-languages" element={<LoveLanguageTest />} />
                <Route path="/attachment-styles" element={<AttachmentStyleTest />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
              </Routes>
            </div>
          </main>
        </TestProvider>

        <Footer />
      </div>
    </Router>
  );
}

export default App; 