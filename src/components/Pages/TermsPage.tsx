import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const TermsPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>1. Acceptance of Terms</Typography>
          <Typography variant="body1" paragraph>
            By accessing and using the Relationship Self-Assessment Tests website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </Typography>

          <Typography variant="h6" gutterBottom>2. Use of Service</Typography>
          <Typography variant="body1" paragraph>
            The Site provides self-assessment tests for educational and informational purposes only. These tests are not a substitute for professional advice. You agree to use the information provided on the Site responsibly and at your own risk.
          </Typography>

          <Typography variant="h6" gutterBottom>3. Intellectual Property</Typography>
          <Typography variant="body1" paragraph>
            The Site and its original content, features, and functionality are owned by the Site creators and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Site without prior written permission.
          </Typography>

          <Typography variant="h6" gutterBottom>4. User Conduct</Typography>
          <Typography variant="body1" paragraph>
            You agree not to use the Site in any way that causes, or may cause, damage to the Site or impairment of the availability or accessibility of the Site; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
          </Typography>

          <Typography variant="h6" gutterBottom>5. Disclaimers</Typography>
          <Typography variant="body1" paragraph>
            The service is provided "as is" without any warranties, express or implied. We do not warrant that the service will be uninterrupted or error-free. Please refer to our separate Disclaimer page for more detailed information regarding the limitations of the content provided.
          </Typography>

          <Typography variant="h6" gutterBottom>6. Limitation of Liability</Typography>
          <Typography variant="body1" paragraph>
            In no event shall the Site creators, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </Typography>

          <Typography variant="h6" gutterBottom>7. Changes to Terms</Typography>
          <Typography variant="body1" paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </Typography>

          <Typography variant="h6" gutterBottom>8. Governing Law</Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction - e.g., California, United States], without regard to its conflict of law provisions.
          </Typography>

          <Typography variant="h6" gutterBottom>9. Contact Us</Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms, please contact us via the information provided on our Contact Us page.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage; 