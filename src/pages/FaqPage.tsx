import React from 'react';

export const FaqPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <section>
        <h2>About the Tests</h2>
        <article>
          <h3>What are the Love Languages?</h3>
          <p>{/* Placeholder answer */}</p>
        </article>
        <article>
          <h3>What are Attachment Styles?</h3>
          <p>{/* Placeholder answer */}</p>
        </article>
        <article>
          <h3>How accurate are these tests?</h3>
          <p>{/* Placeholder answer - include disclaimer link */}</p>
        </article>
        {/* Add more relevant questions */}
      </section>
      <section>
        <h2>Using the Website</h2>
        {/* Add questions about site functionality, privacy etc. */}
      </section>
    </div>
  );
}; 