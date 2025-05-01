import React from 'react';
import { useParams } from 'react-router-dom';
import { loveLanguageDescriptions } from '../data/loveLanguagesData';

// Define type for description object based on data structure
type LanguageDescription = {
  title: string;
  description: string;
  expressing: { implications: string; tips: string };
  receiving: { implications: string; tips: string };
  // Add other potential fields if needed
  longDescription?: string; // Used in original code, maybe remove if not in data
  name?: string; // Used in original code, use title instead
};

export const LoveLanguageDetailPage: React.FC = () => {
  const { languageSlug } = useParams<{ languageSlug: string }>();

  // Find the language data using the correct export
  // We need to map the slug (e.g., 'words-of-affirmation') to the key (e.g., 'A')
  // This requires reversing the `loveLanguagesCategories` or creating a slug mapping
  // For now, we'll assume a simple mapping exists or is added to data file
  const languageKey = languageSlug ? mapSlugToLanguageKey(languageSlug) : undefined;
  const language: LanguageDescription | undefined = languageKey
    ? loveLanguageDescriptions[languageKey as keyof typeof loveLanguageDescriptions]
    : undefined;

  // TODO: Implement or import mapSlugToLanguageKey function
  function mapSlugToLanguageKey(slug: string): string | undefined {
    // Example implementation (should ideally live in or near data file)
    const mapping: { [key: string]: string } = {
      'words-of-affirmation': 'A',
      'quality-time': 'B',
      'receiving-gifts': 'C',
      'acts-of-service': 'D',
      'physical-touch': 'E'
    };
    return mapping[slug];
  }

  if (!language) {
    return <div>Language not found.</div>; // Simple error message
  }

  const languageName = language.title || 'Love Language';

  // Remove Layout wrapper, add div wrapper
  return (
    <div className="page-container">
      <h1>{languageName}</h1>
      <p>Deep dive into this specific love language...</p>
      {/* Placeholder for ~600-1000 words */}
      <p>{language.description || 'Detailed description coming soon...'}</p>

      <h2>How to Express {languageName}</h2>
      <p>{language.expressing?.tips || 'Details coming soon...'}</p>

      <h2>How You Might Receive Love as {languageName}</h2>
       <p>{language.receiving?.implications || 'Details coming soon...'}</p>

      <h2>Challenges and Considerations</h2>
       <p>Details coming soon...</p>

      <p>
        <a href="/love-languages-overview">Back to Love Languages Overview</a>
      </p>
    </div>
  );
}; 