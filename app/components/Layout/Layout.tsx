import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Relationship Self-Assessment Tests | Love Languages &amp; Attachment Styles</title>
        <meta name="description" content="Free interactive relationship self-assessment tests. Discover your Love Language and Attachment Style with our comprehensive psychological assessments designed to improve relationships." />
        <meta name="keywords" content="love languages, attachment styles, relationship test, relationship assessment, psychology, dating, couples therapy, emotional intelligence" />
        <meta name="author" content="Relationship Self-Assessment Tests Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <header className="App-header">
          <h1>Relationship Self-Assessment Tests</h1>
        </header>
        <main className="App-main">
          <nav className="test-tabs">
            <Link href="/" legacyBehavior>
              <a className={`tab ${router.pathname === '/' || router.pathname === '/love-languages' ? 'active' : ''}`}>
                Love Languages Test
              </a>
            </Link>
            <Link href="/attachment-styles" legacyBehavior>
              <a className={`tab ${router.pathname === '/attachment-styles' ? 'active' : ''}`}>
                Attachment Style Test
              </a>
            </Link>
            <Link href="/resources" legacyBehavior>
              <a className={`tab ${router.pathname === '/resources' ? 'active' : ''}`}>
                Resources
              </a>
            </Link>
          </nav>
          <div className="test-container">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 