import React from 'react';
import '../App.css'; // Reuse existing styles if applicable

const ContactUs: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or suggestions regarding the 
        Relationship Self-Assessment Tests, please feel free to reach out.
      </p>
      <p>
        You can contact the creator, Javier, directly via email:
      </p>
      <p>
        <a href="mailto:javiturco33@gmail.com">javiturco33@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactUs; 