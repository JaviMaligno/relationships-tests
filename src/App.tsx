import React, { useState } from 'react';
import { TestProvider } from './contexts/TestContext';
import LoveLanguageTest from './components/LoveLanguageTest';
import AttachmentStyleTest from './components/AttachmentStyleTest';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('love');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Relationship Self-Assessment Tests</h1>
      </header>

      <main className="App-main">
        <div className="test-tabs">
          <button 
            className={`tab ${activeTab === 'love' ? 'active' : ''}`}
            onClick={() => setActiveTab('love')}
          >
            Love Languages Test
          </button>
          <button 
            className={`tab ${activeTab === 'attachment' ? 'active' : ''}`}
            onClick={() => setActiveTab('attachment')}
          >
            Attachment Style Test
          </button>
        </div>

        <div className="test-container">
          <TestProvider>
            {activeTab === 'love' && <LoveLanguageTest />}
            {activeTab === 'attachment' && <AttachmentStyleTest />}
          </TestProvider>
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2025 Self-Assessment Tests</p>
      </footer>
    </div>
  );
}

export default App; 