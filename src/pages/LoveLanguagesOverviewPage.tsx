import React from 'react';
import { SEO, StructuredData, createArticleSchema, createItemListSchema } from '../components/SEO';

export const LoveLanguagesOverviewPage: React.FC = () => {
  // Define the love languages for structured data
  const loveLanguagesItems = [
    {
      name: "Words of Affirmation",
      description: "Expressing love through verbal appreciation, encouragement, and positive words",
      url: "https://relationships-tests.vercel.app/love-language/words-of-affirmation"
    },
    {
      name: "Quality Time",
      description: "Expressing love through undivided attention and meaningful shared experiences",
      url: "https://relationships-tests.vercel.app/love-language/quality-time"
    },
    {
      name: "Receiving Gifts",
      description: "Expressing love through thoughtful gifts and tangible symbols of care",
      url: "https://relationships-tests.vercel.app/love-language/receiving-gifts"
    },
    {
      name: "Acts of Service",
      description: "Expressing love through helpful actions and doing things for your partner",
      url: "https://relationships-tests.vercel.app/love-language/acts-of-service"
    },
    {
      name: "Physical Touch",
      description: "Expressing love through appropriate physical contact and affection",
      url: "https://relationships-tests.vercel.app/love-language/physical-touch"
    }
  ];

  return (
    <div className="page-container">
      <SEO
        title="Understanding the 5 Love Languages | Complete Guide"
        description="Discover Dr. Gary Chapman's Five Love Languages theory. Learn about Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch to improve your relationships."
        keywords="five love languages, Dr Gary Chapman, Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, Physical Touch, relationship communication"
        canonical="https://relationships-tests.vercel.app/love-languages-overview"
        ogType="article"
        article={{
          author: "Relationship Self-Assessment Tests Team",
          section: "Relationship Psychology",
          tags: ["Love Languages", "Relationship Communication", "Dr. Gary Chapman"]
        }}
      />
      
      <StructuredData
        schema={createArticleSchema(
          "Understanding the 5 Love Languages",
          "A comprehensive guide to Dr. Gary Chapman's Five Love Languages theory and how it can improve relationship communication and connection.",
          "https://relationships-tests.vercel.app/love-languages-overview"
        )}
      />
      
      <StructuredData
        schema={createItemListSchema(
          "The Five Love Languages",
          "The five different ways people express and receive love according to Dr. Gary Chapman's theory",
          loveLanguagesItems
        )}
      />
      
      <h1>Understanding the 5 Love Languages</h1>
      <p>Introduction to the concept, its origin (Dr. Gary Chapman), and importance in relationships...</p>
      {/* Placeholder for ~600-1000 words */}

      <h2>The Five Languages</h2>
      <ul>
        <li><a href="/love-language/words-of-affirmation">Words of Affirmation</a></li>
        <li><a href="/love-language/quality-time">Quality Time</a></li>
        <li><a href="/love-language/receiving-gifts">Receiving Gifts</a></li>
        <li><a href="/love-language/acts-of-service">Acts of Service</a></li>
        <li><a href="/love-language/physical-touch">Physical Touch</a></li>
      </ul>

      {/* Add sections on identifying your language, speaking your partner's language etc. */}

    </div>
  );
}; 