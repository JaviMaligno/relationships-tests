import React from 'react';
import './Resources.css'; // We'll create this for styling
import Link from 'next/link';
import { SEO } from './SEO';

const Resources: React.FC = () => {
  return (
    <div className="resources-content">
      <SEO
        title="Relationship Resources | Love Languages & Attachment Theory"
        description="Explore curated resources about Love Languages and Attachment Theory to deepen your understanding of relationship dynamics and improve your connections."
        keywords="relationship resources, love languages resources, attachment theory resources, relationship psychology, couples therapy"
        canonical="https://relationships-tests.vercel.app/resources"
        ogType="website"
      />
      
      <h2>Further Reading & Resources</h2>
      <p className="resources-intro">
        Understanding concepts like Love Languages and Attachment Styles can significantly 
        improve self-awareness and relationship dynamics. The resources below offer 
        deeper insights, practical advice, and further exploration into these valuable 
        frameworks. Engaging with this material can provide tools for better communication, 
        stronger connections, and personal growth within your relationships.
      </p>
      
      <section>
        <h3>Love Languages</h3>
        <p>
          Learn more about the theory and discover your own language with our overview page: 
          <Link href="/love-languages-overview">Understanding the 5 Love Languages</Link>.
        </p>
        <ul>
          <li>
            <a href="https://open.spotify.com/show/3y5m3MDgcsEuilZL38d6Gz?si=6jW1BVz7T7i9CM-Rk6LHsA" target="_blank" rel="noopener noreferrer">
              The 5 Love Languages: The Secret to Love that Lasts (Audiobook)
            </a>
            <p>
              Listen to Dr. Gary Chapman himself narrate his groundbreaking book that has 
              transformed over 10 million relationships. This 4 hour and 48 minute audiobook 
              presents simple yet powerful ideas for expressing and receiving love more 
              effectively. Chapman's warm, conversational style makes complex relationship 
              concepts accessible and practical. The audiobook includes real-life stories, 
              practical applications for each love language, and a personal profile to help 
              you discover your primary love language. Perfect for busy couples who want to 
              strengthen their relationship while commuting or during daily activities.
            </p>
          </li>
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
            <a href="https://www.gottman.com/about/the-gottman-method/" target="_blank" rel="noopener noreferrer">
              Gottman Institute - The Gottman Method
            </a>
            <p>
              The Gottman Institute offers research-based approaches to relationship counseling 
              and therapy. Their methods complement Love Languages concepts by focusing on 
              building love maps, nurturing fondness and admiration, and turning toward each 
              other instead of away. Dr. John Gottman's extensive research has identified key 
              predictors of relationship success and provides evidence-based tools for couples 
              seeking to strengthen their bond. Their approach emphasizes emotional attunement, 
              conflict resolution skills, and creating shared meaning in relationships.
            </p>
          </li>
          <li>
            <a href="https://www.psychologytoday.com/us/blog/meet-catch-and-keep/201606/how-express-love-according-your-partners-love-language" target="_blank" rel="noopener noreferrer">
              Psychology Today: How to Express Love According to Your Partner's Love Language
            </a>
            <p>
              This Psychology Today article provides practical, actionable advice for 
              implementing Love Languages in your relationship. It includes specific examples 
              of how to express each language effectively, common mistakes to avoid, and tips 
              for identifying your partner's primary language through observation. The article 
              bridges the gap between theory and practice, offering real-world scenarios and 
              suggestions that can be implemented immediately to improve relationship satisfaction 
              and emotional connection.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Attachment Theory</h3>
        <p>
          Discover your attachment style and learn more on our overview page: 
          <Link href="/attachment-styles-overview">Understanding Attachment Styles</Link>.
        </p>
        <ul>
          <li>
            <a href="https://www.attachmentproject.com/" target="_blank" rel="noopener noreferrer">
              The Attachment Project
            </a>
            <p>
              A comprehensive resource dedicated to attachment theory education and application. 
              The site provides detailed information about the four main attachment styles 
              (secure, anxious, avoidant, and disorganized), their origins in early childhood 
              experiences, and their impact on adult relationships. The content includes 
              practical strategies for developing more secure attachment patterns, understanding 
              your triggers, and building healthier relationship dynamics. The resource is 
              particularly valuable for those looking to understand how their past influences 
              their present relationship behaviors.
            </p>
          </li>
          <li>
            <a href="https://www.verywellmind.com/what-is-attachment-theory-2795337" target="_blank" rel="noopener noreferrer">
              Verywell Mind: What Is Attachment Theory?
            </a>
            <p>
              This article provides a scientifically grounded introduction to attachment theory, 
              tracing its development from John Bowlby's original work through modern research. 
              It explains the theoretical foundations, describes how attachment patterns form 
              in infancy and childhood, and discusses their lifelong impact on relationships, 
              emotional regulation, and mental health. The piece is written in accessible 
              language while maintaining scientific accuracy, making it an excellent starting 
              point for those new to attachment theory or seeking a thorough refresher.
            </p>
          </li>
          <li>
            <a href="https://www.attachmenttheoryinaction.com/" target="_blank" rel="noopener noreferrer">
              Attachment Theory in Action
            </a>
            <p>
              This resource focuses on the practical application of attachment theory in daily 
              life and relationships. It offers tools for self-reflection, exercises for couples, 
              and strategies for healing attachment wounds. The site emphasizes that while our 
              early attachment experiences shape us, change and growth are possible throughout 
              life. It provides hope and concrete steps for those seeking to develop "earned 
              security" - the ability to form healthy attachments regardless of early experiences. 
              The content includes case studies, therapeutic approaches, and evidence-based 
              interventions.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Professional Support</h3>
        <ul>
          <li>
            <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer">
              Find a Therapist - Psychology Today
            </a>
            <p>
              If your test results or self-reflection reveal areas you'd like to explore more 
              deeply, consider connecting with a licensed mental health professional. Psychology 
              Today's directory allows you to search for therapists by location, specialty, 
              insurance accepted, and treatment approach. Many therapists specialize in 
              relationship counseling, attachment-based therapy, or couples work. Professional 
              guidance can be invaluable for addressing specific relationship challenges, 
              processing attachment wounds, or developing more effective communication patterns 
              with your partner.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resources; 