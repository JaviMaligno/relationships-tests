import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const DisclaimerPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Disclaimer
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            The information provided on the Relationship Self-Assessment Tests website (the "Site") is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </Typography>
          <Typography variant="body1" paragraph>
            The self-assessment tests available on this Site are intended solely for educational and self-discovery purposes. They are not designed to, and should not be interpreted as, providing any form of professional psychological diagnosis, evaluation, or treatment advice.
          </Typography>
          <Typography variant="body1" paragraph>
            Using these tests does not establish a therapist-client relationship. The results should not be considered a substitute for consultation with a qualified mental health professional or therapist. If you are experiencing significant emotional distress, relationship problems, or mental health concerns, please seek guidance from a licensed professional.
          </Typography>
          <Typography variant="body1" paragraph>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </Typography>
          <Typography variant="body1" paragraph>
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default DisclaimerPage; 