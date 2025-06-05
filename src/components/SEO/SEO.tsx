import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogUrl?: string;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Relationship Self-Assessment Tests',
  description = 'Free interactive tests to understand and improve your relationships. Discover your Love Language and Attachment Style with our comprehensive assessments.',
  keywords = 'love languages, attachment styles, relationship test, relationship assessment, psychology, dating, couples therapy, emotional intelligence',
  canonical,
  ogType = 'website',
  ogImage = 'https://relationships-tests.vercel.app/heart-logo192.png',
  ogUrl,
  article,
  noindex = false
}) => {
  const siteUrl = 'https://relationships-tests.vercel.app';
  const fullTitle = title.includes('Relationship Self-Assessment') ? title : `${title} | Relationship Self-Assessment Tests`;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const fullOgUrl = ogUrl || fullCanonical;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Relationship Self-Assessment Tests" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific tags */}
      {article && ogType === 'article' && (
        <>
          {article.author && <meta property="article:author" content={article.author} />}
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Relationship Self-Assessment Tests Team" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
    </>
  );
};

export default SEO; 