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
import { FaqPage } from './pages/FaqPage';
import { LoveLanguagesOverviewPage } from './pages/LoveLanguagesOverviewPage';
import { LoveLanguageDetailPage } from './pages/LoveLanguageDetailPage';
import { AttachmentStylesOverviewPage } from './pages/AttachmentStylesOverviewPage';
import { AttachmentStyleDetailPage } from './pages/AttachmentStyleDetailPage';
import NotFound from './components/NotFound';
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
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/love-languages-overview" element={<LoveLanguagesOverviewPage />} />
                <Route path="/love-language/:languageSlug" element={<LoveLanguageDetailPage />} />
                <Route path="/attachment-styles-overview" element={<AttachmentStylesOverviewPage />} />
                <Route path="/attachment-style/:styleSlug" element={<AttachmentStyleDetailPage />} />
                {/* Catch-all route for 404 errors */}
                <Route path="*" element={<NotFound />} />
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