import React from 'react';
import html2canvas from 'html2canvas';

export const downloadElementAsImage = (elementRef: React.RefObject<HTMLDivElement | null>, filename: string): void => {
  if (elementRef.current) {
    html2canvas(elementRef.current, { 
      // scale: 2, // Increase scale for better resolution - Removed due to TS error
      useCORS: true // Handle potential cross-origin issues with images/fonts
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(err => {
      console.error("Error capturing element:", err);
      // Optionally, inform the user about the error
    });
  } else {
    console.error("Element ref is not available for download.");
    // Optionally, inform the user
  }
}; 