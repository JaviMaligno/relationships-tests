import React from 'react';

interface BaseSchema {
  '@context': string;
  '@type': string;
}

interface WebSiteSchema extends BaseSchema {
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  description: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

interface QuizSchema extends BaseSchema {
  '@type': 'Quiz';
  name: string;
  description: string;
  educationalLevel?: string;
  about: {
    '@type': 'Thing';
    name: string;
  };
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
}

interface FAQSchema extends BaseSchema {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

interface ItemListSchema extends BaseSchema {
  '@type': 'ItemList';
  name: string;
  description: string;
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    description?: string;
    url: string;
  }>;
}

type SchemaType = WebSiteSchema | ArticleSchema | QuizSchema | FAQSchema | ItemListSchema;

interface StructuredDataProps {
  schema: SchemaType;
}

const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

// Helper functions to create common schemas
export const createWebSiteSchema = (
  name: string,
  url: string,
  description?: string
): WebSiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  url,
  description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

export const createArticleSchema = (
  headline: string,
  description: string,
  url: string,
  author: string = 'Relationship Self-Assessment Tests Team',
  datePublished?: string,
  dateModified?: string
): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  author: {
    '@type': 'Organization',
    name: author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Relationship Self-Assessment Tests',
    logo: {
      '@type': 'ImageObject',
      url: 'https://relationships-tests.vercel.app/heart-logo192.png'
    }
  },
  datePublished,
  dateModified,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  }
});

export const createQuizSchema = (
  name: string,
  description: string,
  aboutTopic: string
): QuizSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name,
  description,
  educationalLevel: 'beginner',
  about: {
    '@type': 'Thing',
    name: aboutTopic
  },
  provider: {
    '@type': 'Organization',
    name: 'Relationship Self-Assessment Tests',
    url: 'https://relationships-tests.vercel.app'
  }
});

export const createFAQSchema = (
  questions: Array<{ question: string; answer: string }>
): FAQSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer
    }
  }))
});

export const createItemListSchema = (
  name: string,
  description: string,
  items: Array<{ name: string; description?: string; url: string }>
): ItemListSchema => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  description,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    description: item.description,
    url: item.url
  }))
});

export default StructuredData; 