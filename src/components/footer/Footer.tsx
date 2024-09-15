import React, { useState } from 'react';
import { Box, Typography, Button, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const Rectangle = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  background: 'white',
  borderTop: '1px rgba(0, 0, 0, 0.17) solid',
  height: '100%',
  top: 0,
}));

const FooterContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const Address = styled(Typography)(({ theme }) => ({
  color: '#9F9F9F',
  fontSize: 14,
  fontFamily: 'Poppins',
  fontWeight: '400',
  [theme.breakpoints.up('sm')]: {
    fontSize: 16,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: 20,
  fontFamily: 'Poppins',
  fontWeight: '700',
  [theme.breakpoints.up('sm')]: {
    fontSize: 24,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: 14,
  fontFamily: 'Poppins',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    fontSize: 16,
  },
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  color: '#9F9F9F',
  fontSize: 14,
  fontFamily: 'Poppins',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    fontSize: 16,
  },
}));

const NewsletterTitle = styled(Typography)(({ theme }) => ({
  color: '#9F9F9F',
  fontSize: 14,
  fontFamily: 'Poppins',
  fontWeight: '500',
  [theme.breakpoints.up('sm')]: {
    fontSize: 16,
  },
}));

const FooterLine = styled(Box)({
  border: '1px #D9D9D9 solid',
});

const Footer = () => {
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      // Replace with actual API call
      console.log('Subscribed with email:', email);
      setSnackbarMessage('Subscription successful!');
      setSnackbarOpen(true);
      setEmail('');
    } else {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <FooterContainer>
      <Rectangle />
      <FooterContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Title>Funiro.</Title>
            <Address>
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </Address>
          </Grid>
          <Grid item xs={12} md={6} container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box>
                <SubSectionTitle>Links</SubSectionTitle>
                <Box>
                  <Link to="/home" style={{ textDecoration: 'none' }}><SectionTitle>Home</SectionTitle></Link>
                  <Link to="/shop" style={{ textDecoration: 'none' }}><SectionTitle>Shop</SectionTitle></Link>
                  <Link to="/about" style={{ textDecoration: 'none' }}><SectionTitle>About</SectionTitle></Link>
                  <Link to="/contact" style={{ textDecoration: 'none' }}><SectionTitle>Contact</SectionTitle></Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box>
                <SubSectionTitle>Help</SubSectionTitle>
                <Box>
                  <SectionTitle>Payment Options</SectionTitle>
                  <SectionTitle>Returns</SectionTitle>
                  <SectionTitle>Privacy Policies</SectionTitle>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <NewsletterTitle>Newsletter</NewsletterTitle>
                <Box display="flex" flexDirection="column" alignItems="stretch" gap={2}>
                  <TextField
                    variant="outlined"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                  />
                  <Button variant="outlined" onClick={handleSubscribe}>SUBSCRIBE</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={4}>
          <FooterLine />
          <Typography color="black" sx={{ mt: 2, textAlign: 'center' }}>
            2023 Funiro. All rights reserved
          </Typography>
        </Box>
      </FooterContent>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </FooterContainer>
  );
};

export default Footer;
