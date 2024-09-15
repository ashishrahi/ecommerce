import React from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Grid } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    subject: Yup.string(),
    message: Yup.string().required('Required'),
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Get In Touch With Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Address:</strong> 236 5th SE Avenue, New York NY10000, United States
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> Mobile: +(84) 546-6789<br />
              Hotline: +(84) 456-6789
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Working Time:</strong> Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log('Form data', values);
                // Handle form submission (e.g., send data to server)
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Typography variant="h6" gutterBottom>
                    Contact Form
                  </Typography>
                  <Field
                    as={TextField}
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    name="subject"
                    label="Subject (Optional)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Field
                    as={TextField}
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
