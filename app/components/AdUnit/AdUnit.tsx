import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle?: { [key: string]: unknown }[];
    }
}

const AdUnit: React.FC = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-4078498206015210" // Replace with your actual client ID if different
                 data-ad-slot="2911544260" // Use the provided Ad Slot ID
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdUnit; 