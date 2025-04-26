import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto', // Push footer to bottom
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <MuiLink component={RouterLink} to="/about" color="inherit" sx={{ mx: 1 }}>
                        About Us
                    </MuiLink>
                    |
                    <MuiLink component={RouterLink} to="/contact" color="inherit" sx={{ mx: 1 }}>
                        Contact Us
                    </MuiLink>
                    |
                    <MuiLink component={RouterLink} to="/privacy" color="inherit" sx={{ mx: 1 }}>
                        Privacy Policy
                    </MuiLink>
                    |
                    <MuiLink component={RouterLink} to="/terms" color="inherit" sx={{ mx: 1 }}>
                        Terms of Service
                    </MuiLink>
                    |
                    <MuiLink component={RouterLink} to="/disclaimer" color="inherit" sx={{ mx: 1 }}>
                        Disclaimer
                    </MuiLink>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {'Copyright © '}
                    <MuiLink color="inherit" href="https://relationships-tests.vercel.app/">
                        Relationship Self-Assessment Tests
                    </MuiLink>{' '}
                    {currentYear}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer; 