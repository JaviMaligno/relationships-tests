import React from 'react';
import '../App.css'; // Reuse existing styles if applicable

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Privacy Policy</h2>
      <p>
        We are committed to protecting your privacy. This application, 
        Relationship Self-Assessment Tests, does not collect, store, or share 
        any personal data from its users.
      </p>
      <p>
        The tests (Love Languages, Attachment Styles) are processed entirely 
        within your browser. Your answers and results are not sent to our servers 
        or any third parties. Once you close the browser tab or navigate away, 
        the information related to your test session is discarded.
      </p>
      <p>
        Since we do not collect personal information, there is no data to manage 
        or delete. Your use of the tests is anonymous.
      </p>
      <p>
        If you have any questions about our privacy practices, please contact us 
        using the information provided on the Contact Us page.
      </p>
    </div>
  );
};

export default PrivacyPolicy; 