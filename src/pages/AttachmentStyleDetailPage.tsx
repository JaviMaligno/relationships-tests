import React from 'react';
import { useParams } from 'react-router-dom';
import { attachmentStyleDescriptions } from '../data/attachmentStyleData';

// Define a type for the style description (can be inferred or made more specific later)
type StyleDescription = {
  title: string;
  description: string;
  implications?: string;
  tips?: string;
  // Add other potential fields based on the data structure
  longDescription?: string; // Assuming this might exist based on usage
  name?: string; // Added based on usage `style.name`
};

export const AttachmentStyleDetailPage: React.FC = () => {
  const { styleSlug } = useParams<{ styleSlug: string }>();

  // Find the style data based on the slug using the correct export
  const style: StyleDescription | undefined = styleSlug 
    ? attachmentStyleDescriptions[styleSlug as keyof typeof attachmentStyleDescriptions] 
    : undefined;

  if (!style) {
    // Render simple error message without Layout
    return <div>Attachment style not found.</div>;
  }

  // Use style.title or style.name based on the actual data structure
  const styleName = style.title || style.name || 'Attachment Style'; 

  return (
    <div className="page-container"> 
      <h1>{styleName}</h1>
      <p>Deep dive into this specific attachment style...</p>
      {/* Placeholder for ~600-1000 words */}
      <p>{style.description || 'Detailed description coming soon...'}</p> 

      <h2>Characteristics in Relationships</h2>
      {/* Placeholder - Use style.implications or similar fields */}
      <p>{style.implications || 'Details coming soon...'}</p>

      <h2>Potential Challenges</h2>
      {/* Placeholder */}
      <p>Details coming soon...</p>

      <h2>Pathways to Growth / Security</h2>
      {/* Placeholder - Use style.tips or similar fields */}
      <p>{style.tips || 'Details coming soon...'}</p>

      <p>
        <a href="/attachment-styles-overview">Back to Attachment Styles Overview</a>
      </p>
    </div>
  );
}; 