import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { loveLanguageDescriptions, loveLanguagesCategories } from '../../app/data/loveLanguagesData';
import Layout from '../../app/components/Layout/Layout';
import { ParsedUrlQuery } from 'querystring';

type LanguageDescription = {
  title: string;
  description: string;
  expressing: { implications: string; tips: string };
  receiving: { implications: string; tips: string };
};

interface LoveLanguageDetailPageProps {
  language: LanguageDescription | null;
}

const LoveLanguageDetailPage: React.FC<LoveLanguageDetailPageProps> = ({ language }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!language) {
    return <div>Language not found.</div>;
  }

  const languageName = language.title;

  return (
    <Layout>
      <div className="page-container">
        <h1>{languageName}</h1>
        <p>Deep dive into this specific love language...</p>
        <p>{language.description || 'Detailed description coming soon...'}</p>

        <h2>How to Express {languageName}</h2>
        <p>{language.expressing?.tips || 'Details coming soon...'}</p>

        <h2>How You Might Receive Love as {languageName}</h2>
        <p>{language.receiving?.implications || 'Details coming soon...'}</p>

        <h2>Challenges and Considerations</h2>
        <p>Details coming soon...</p>

      </div>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  languageSlug: string;
}

const mapSlugToLanguageKey = (slug: string): string | undefined => {
  const mapping: { [key: string]: string } = {
    'words-of-affirmation': 'A',
    'quality-time': 'B',
    'receiving-gifts': 'C',
    'acts-of-service': 'D',
    'physical-touch': 'E'
  };
  return mapping[slug];
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate slugs from the love language names (e.g. "Quality Time" -> "quality-time")
  const paths = Object.values(loveLanguagesCategories).map((name) => ({
    params: { languageSlug: name.toLowerCase().replace(/ /g, '-') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<LoveLanguageDetailPageProps, IParams> = async (context) => {
  const { languageSlug } = context.params!;
  const languageKey = mapSlugToLanguageKey(languageSlug);
  
  const language = languageKey
    ? loveLanguageDescriptions[languageKey as keyof typeof loveLanguageDescriptions]
    : null;

  return {
    props: {
      language,
    },
  };
};

export default LoveLanguageDetailPage; 