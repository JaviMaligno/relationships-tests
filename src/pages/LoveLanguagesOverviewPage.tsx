import React from 'react';

export const LoveLanguagesOverviewPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Understanding the 5 Love Languages</h1>
      <p>Introduction to the concept, its origin (Dr. Gary Chapman), and importance in relationships...</p>
      {/* Placeholder for ~600-1000 words */}

      <h2>The Five Languages</h2>
      <ul>
        <li><a href="/love-language/words-of-affirmation">Words of Affirmation</a></li>
        <li><a href="/love-language/quality-time">Quality Time</a></li>
        <li><a href="/love-language/receiving-gifts">Receiving Gifts</a></li>
        <li><a href="/love-language/acts-of-service">Acts of Service</a></li>
        <li><a href="/love-language/physical-touch">Physical Touch</a></li>
      </ul>

      {/* Add sections on identifying your language, speaking your partner's language etc. */}

    </div>
  );
}; 