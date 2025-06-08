import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { attachmentStyleDescriptions, attachmentStyleCategories } from '../../app/data/attachmentStyleData';
import Layout from '../../app/components/Layout/Layout';
import { ParsedUrlQuery } from 'querystring';

type StyleDescription = {
  title: string;
  description: string;
  implications?: string;
  tips?: string;
};

interface AttachmentStyleDetailPageProps {
  style: StyleDescription | null;
}

const AttachmentStyleDetailPage: React.FC<AttachmentStyleDetailPageProps> = ({ style }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!style) {
    return <div>Attachment style not found.</div>;
  }

  const styleName = style.title;

  return (
    <Layout>
      <div className="page-container">
        <h1>{styleName}</h1>
        <p>Deep dive into this specific attachment style...</p>
        <p>{style.description || 'Detailed description coming soon...'}</p>

        <h2>Characteristics in Relationships</h2>
        <p>{style.implications || 'Details coming soon...'}</p>

        <h2>Potential Challenges</h2>
        <p>Details coming soon...</p>

        <h2>Pathways to Growth / Security</h2>
        <p>{style.tips || 'Details coming soon...'}</p>
      </div>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  styleSlug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(attachmentStyleCategories).map((key) => ({
      params: { styleSlug: key },
    }));
  
    return { paths, fallback: false };
  };
  

export const getStaticProps: GetStaticProps<AttachmentStyleDetailPageProps, IParams> = async (context) => {
  const { styleSlug } = context.params!;
  
  const style = attachmentStyleDescriptions[styleSlug as keyof typeof attachmentStyleDescriptions] || null;

  return {
    props: {
      style,
    },
  };
};

export default AttachmentStyleDetailPage; 