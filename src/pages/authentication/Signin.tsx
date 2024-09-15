import React from 'react';
import { Box, Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Divider } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Submitted:', values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container sx={{ height: '100vh', backgroundColor: '#fff' }}>
            {/* Left side: Form Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', px: 6 }}
            >
              {/* Welcome Text */}
              <Typography variant="h4" fontWeight={500} gutterBottom>
                Welcome back!
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 4 }}>
                Enter your credentials to access your account
              </Typography>

              {/* Email Field */}
              <TextField
                name="email"
                label="Email address"
                fullWidth
                variant="outlined"
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {/* Password Field */}
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {/* Remember Me Checkbox */}
              <FormControlLabel
                control={<Checkbox checked={values.remember} onChange={handleChange} name="remember" />}
                label="Remember for 30 days"
                sx={{ mt: 2 }}
              />

              {/* Forgot Password Link */}
              <Box sx={{ textAlign: 'right', mb: 2 }}>
                <Typography variant="caption" color="primary" component="a" href="#">
                  Forgot password?
                </Typography>
              </Box>

              {/* Login Button */}
              <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#3A5B22', mb: 3 }}>
                Login
              </Button>

              {/* Divider */}
              <Divider sx={{ mb: 2 }}>Or</Divider>

              {/* Social Login Buttons */}
              <Button
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                startIcon={<img src="https://via.placeholder.com/20" alt="Google" />}
              >
                Sign in with Google
              </Button>
              <Button variant="outlined" fullWidth startIcon={<img src="https://via.placeholder.com/20" alt="Apple" />}>
                Sign in with Apple
              </Button>

              {/* Sign-up Link */}
              <Typography variant="body2" sx={{ textAlign: 'center', mt: 3 }}>
                Don’t have an account?{' '}
                <Typography variant="body2" color="primary" component="a" href="#">
                  Sign Up
                </Typography>
              </Typography>
            </Grid>

            {/* Right side: Image Section with customizations */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                backgroundImage: 'url(https://yourimageurl.com)', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTopLeftRadius: '45px',
                borderBottomLeftRadius: '45px',
                height: '100vh', // Ensures the image covers the full height
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)', // Soft shadow for depth
                overflow: 'hidden',
              }}
            >
              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))',
                  borderTopLeftRadius: '45px',
                  borderBottomLeftRadius: '45px',
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
