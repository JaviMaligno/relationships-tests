import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { href: '/about', text: 'About Us' },
        { href: '/contact', text: 'Contact Us' },
        { href: '/privacy', text: 'Privacy Policy' },
        { href: '/terms', text: 'Terms of Service' },
        { href: '/disclaimer', text: 'Disclaimer' },
        { href: '/faq', text: 'FAQ' },
    ];

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
                    {links.map((link, index) => (
                        <React.Fragment key={link.href}>
                            <MuiLink component={Link} href={link.href} color="inherit" sx={{ mx: 1 }}>
                                {link.text}
                            </MuiLink>
                            {index < links.length - 1 && ' | '}
                        </React.Fragment>
                    ))}
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