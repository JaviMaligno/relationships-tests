import React from 'react';
import './Resources.css'; // We'll create this for styling
import AdUnit from './AdUnit/AdUnit'; // Import the AdUnit component
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Resources: React.FC = () => {
  return (
    <div className="resources-content">
      <h2>Further Reading & Resources</h2>
      <p className="resources-intro">
        Understanding concepts like Love Languages and Attachment Styles can significantly 
        improve self-awareness and relationship dynamics. The resources below offer 
        deeper insights, practical advice, and further exploration into these valuable 
        frameworks. Engaging with this material can provide tools for better communication, 
        stronger connections, and personal growth within your relationships.
      </p>
      
      <AdUnit />

      <section>
        <h3>Love Languages</h3>
        <p>
          Learn more about the theory and discover your own language with our overview page: 
          <Link to="/love-languages-overview">Understanding the 5 Love Languages</Link>.
        </p>
        <ul>
          <li>
            <a href="https://www.5lovelanguages.com/" target="_blank" rel="noopener noreferrer">
              The 5 Love Languages® Official Site
            </a>
            <p>
              Explore the official website by Dr. Gary Chapman, the originator of the 
              Love Languages concept. This is the primary source for the official quiz, 
              detailed explanations of each language (Words of Affirmation, Acts of Service, 
              Receiving Gifts, Quality Time, Physical Touch), and associated resources like 
              books and study guides. Understanding your own and your partner's primary 
              language can be a powerful tool for improving communication and ensuring 
              expressions of affection are truly felt and appreciated. The site offers 
              practical tips for speaking each language.
            </p>
          </li>
          <li>
            <a href="https://www.verywellmind.com/can-the-five-love-languages-help-your-relationship-4783538" target="_blank" rel="noopener noreferrer">
              Verywell Mind: Can the Five Love Languages Help Your Relationship?
            </a>
            <p>
              This article offers a balanced perspective on the popular Five Love Languages 
              framework. It delves into the potential benefits, such as increased empathy 
              and better communication, while also acknowledging common critiques, like 
              the simplicity of the model or the potential for it to be misused. It's a 
              useful read for understanding not just *what* the love languages are, but 
              also *how* and *why* they might (or might not) work in the context of 
              real-world relationships, encouraging a thoughtful application of the concept.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Attachment Styles</h3>
        <p>
          Explore how attachment patterns influence relationships on our overview page: 
          <Link to="/attachment-styles-overview">Understanding Attachment Styles</Link>.
        </p>
        <ul>
          <li>
            <a href="https://www.verywellmind.com/attachment-styles-2795344" target="_blank" rel="noopener noreferrer">
              Verywell Mind: Attachment Styles
            </a>
            <p>
              Gain a solid understanding of the four primary adult attachment styles: 
              Secure, Anxious-Preoccupied, Dismissive-Avoidant, and Fearful-Avoidant 
              (Disorganized). This resource explains the theoretical background rooted 
              in early childhood experiences and, crucially, details how these styles 
              commonly manifest in adult behaviors, relationship patterns, and internal 
              experiences. Recognizing your own and potentially your partner's attachment 
              style can illuminate recurring relationship dynamics and provide a foundation 
              for building healthier connections.
            </p>
          </li>
          <li>
            <a href="https://www.psychologytoday.com/us/basics/attachment" target="_blank" rel="noopener noreferrer">
              Psychology Today: Attachment
            </a>
            <p>
              Psychology Today provides a broad overview and collection of articles related 
              to attachment theory. This is a great resource for exploring the topic beyond 
              the basics, covering its implications in various life stages and contexts, 
              including partner selection, conflict resolution, parenting, and therapeutic 
              approaches. You can find diverse perspectives from different experts, summaries 
              of recent research, and links to find therapists who specialize in 
              attachment-related issues.
            </p>
          </li>
           <li>
            <a href="https://www.attachedthebook.com/wordpress/" target="_blank" rel="noopener noreferrer">
             Attached: The New Science of Adult Attachment
            </a>
            <p>
              This is the companion website for the widely-read book "Attached" by Amir 
              Levine and Rachel S.F. Heller, which popularized adult attachment theory 
              for a mainstream audience. The book focuses on providing practical, actionable 
              advice based on attachment principles to help individuals find and maintain 
              fulfilling relationships. The website likely offers supplementary content, 
              author insights, community features, or links to purchase the book, serving 
              as a direct portal to the authors' specific approach.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resources; 