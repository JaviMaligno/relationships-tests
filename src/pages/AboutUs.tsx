import React from 'react';
import '../App.css'; // Reuse existing styles if applicable

const AboutUs: React.FC = () => {
  return (
    <div className="page-container">
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