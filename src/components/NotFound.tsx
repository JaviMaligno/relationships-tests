import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

const NotFound: React.FC = () => {
  return (
    <div className="page-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <SEO
        title="Page Not Found | Relationship Self-Assessment Tests"
        description="The page you're looking for doesn't exist. Explore our Love Languages and Attachment Style tests or browse our resources."
        canonical="https://relationships-tests.vercel.app/404"
        noindex={true}
      />
      
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Here are some helpful links:</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.1rem', textDecoration: 'none', color: '#007bff' }}>
            🏠 Take the Love Languages Test
          </Link>
          <Link to="/attachment-styles" style={{ fontSize: '1.1rem', textDecoration: 'none', color: '#007bff' }}>
            🔗 Take the Attachment Style Test
          </Link>
          <Link to="/resources" style={{ fontSize: '1.1rem', textDecoration: 'none', color: '#007bff' }}>
            📚 Browse Resources
          </Link>
          <Link to="/faq" style={{ fontSize: '1.1rem', textDecoration: 'none', color: '#007bff' }}>
            ❓ Read FAQ
          </Link>
          <Link to="/about" style={{ fontSize: '1.1rem', textDecoration: 'none', color: '#007bff' }}>
            ℹ️ About Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound; 