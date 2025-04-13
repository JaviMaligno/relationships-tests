import React from 'react';
import './Resources.css'; // We'll create this for styling

const Resources: React.FC = () => {
  return (
    <div className="resources-content">
      <h2>Further Reading & Resources</h2>
      
      <section>
        <h3>Love Languages</h3>
        <ul>
          <li>
            <a href="https://www.5lovelanguages.com/" target="_blank" rel="noopener noreferrer">
              The 5 Love Languages® Official Site
            </a>
            <p>Explore the official website for quizzes, books, and more information.</p>
          </li>
          <li>
            <a href="https://www.verywellmind.com/can-the-five-love-languages-help-your-relationship-4783538" target="_blank" rel="noopener noreferrer">
              Verywell Mind: Can the Five Love Languages Help Your Relationship?
            </a>
            <p>An article discussing the concepts and potential benefits.</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Attachment Styles</h3>
        <ul>
          <li>
            <a href="https://www.verywellmind.com/attachment-styles-2795344" target="_blank" rel="noopener noreferrer">
              Verywell Mind: Attachment Styles
            </a>
            <p>An overview of the different attachment styles in psychology.</p>
          </li>
          <li>
            <a href="https://www.psychologytoday.com/us/basics/attachment" target="_blank" rel="noopener noreferrer">
              Psychology Today: Attachment
            </a>
            <p>Explore articles and find therapists related to attachment theory.</p>
          </li>
           <li>
            <a href="https://www.attachedthebook.com/wordpress/" target="_blank" rel="noopener noreferrer">
             Attached: The New Science of Adult Attachment
            </a>
            <p>Website for the book "Attached" by Amir Levine and Rachel S.F. Heller.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resources; 