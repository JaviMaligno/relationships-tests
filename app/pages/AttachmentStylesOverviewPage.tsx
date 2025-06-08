import React from 'react';

export const AttachmentStylesOverviewPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Understanding Attachment Styles</h1>
      <p>Introduction to Attachment Theory (Bowlby, Ainsworth), its relevance in adult relationships...</p>
      {/* Placeholder for ~600-1000 words */}

      <h2>The Four Main Styles</h2>
      <ul>
        <li><a href="/attachment-style/secure">Secure Attachment</a></li>
        <li><a href="/attachment-style/anxious-preoccupied">Anxious-Preoccupied Attachment</a></li>
        <li><a href="/attachment-style/dismissive-avoidant">Dismissive-Avoidant Attachment</a></li>
        <li><a href="/attachment-style/fearful-avoidant">Fearful-Avoidant (Disorganized) Attachment</a></li>
      </ul>

      {/* Add sections on identifying your style, impact on relationships, moving towards secure attachment etc. */}
    </div>
  );
}; 