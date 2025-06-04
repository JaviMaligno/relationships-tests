import React from 'react';
import '../App.css'; // Reuse existing styles if applicable
import { SEO } from '../components/SEO';

const AboutUs: React.FC = () => {
  return (
    <div className="page-container">
      <SEO
        title="About Us | Relationship Self-Assessment Tests"
        description="Learn about our mission to provide accessible relationship assessment tools based on Love Languages and Attachment Theory to help improve relationship dynamics."
        keywords="about relationship tests, love languages assessment, attachment style assessment, relationship psychology"
        canonical="https://relationships-tests.vercel.app/about"
        ogType="website"
      />
      
      <h2>About Us</h2>
      <p>
        Welcome to Relationship Self-Assessment Tests! Our mission is to provide 
        accessible tools for individuals and couples to gain deeper insights into 
        their relationships and personal interaction styles.
      </p>
      <p>
        We currently offer assessments based on well-established frameworks:
      </p>
      <ul>
        <li><strong>The 5 Love Languages®:</strong> Understand how you and your partner prefer to give and receive love.</li>
        <li><strong>Attachment Theory:</strong> Explore your attachment style and how it influences your connections with others.</li>
      </ul>
      <p>
        These tests are designed to be informative and thought-provoking, serving 
        as a starting point for self-reflection and better communication. We also 
        provide curated resources to further your understanding of these important 
        relationship dynamics.
      </p>
      <p>
        This site was created by Javier, aiming to make valuable psychological 
        concepts more readily available.
      </p>
    </div>
  );
};

export default AboutUs; 