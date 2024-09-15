import { Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from '../../assets/images/living.png';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and policy')
});

// Reusable Form Field Component
const CustomField = ({ name, label, type = 'text', placeholder }) => (
  <Box mb={2}>
    <Typography variant="body2" fontWeight={500}>{label}</Typography>
    <Field
      name={name}
      as={TextField}
      fullWidth
      type={type}
      placeholder={placeholder}
      error={<ErrorMessage name={name} />}
      helperText={<ErrorMessage name={name} />}
      variant="outlined"
      size="small"
      sx={{ borderRadius: 2, mt: 1 }}
    />
  </Box>
);

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', terms: false }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Container 
            maxWidth="lg" 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, side-by-side on medium and larger
              justifyContent: 'space-between', 
              alignItems: 'center', 
              py: 4 
            }}
          >
            
            {/* Left Column */}
            <Box sx={{ width: { xs: '100%', md: '45%' }, mb: { xs: 4, md: 0 } }}>
              <Typography variant="h4" fontWeight={500} mb={4}>Get Started Now</Typography>
              
              {/* Name Field */}
              <CustomField name="name" label="Name" placeholder="Enter your name" />
              
              {/* Email Field */}
              <CustomField name="email" label="Email address" placeholder="Enter your email" />
              
              {/* Password Field */}
              <CustomField name="password" label="Password" type="password" placeholder="Enter your password" />
              
              {/* Terms and Conditions */}
              <Box mb={2}>
                <FormControlLabel
                  control={<Field name="terms" as={Checkbox} color="primary" />}
                  label={<Typography variant="caption">I agree to the <span style={{ textDecoration: 'underline' }}>terms & policy</span></Typography>}
                  sx={{ color: errors.terms && touched.terms ? 'error.main' : 'inherit' }}
                />
                <ErrorMessage name="terms" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
              </Box>
              
              {/* Sign Up Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: '#3A5B22', color: 'white', borderRadius: 2, mt: 2, py: 1 }}
              >
                Sign Up
              </Button>
              
              {/* Or Divider */}
              <Box position="relative" mt={4}>
                <Divider />
                <Typography
                  variant="caption"
                  position="absolute"
                  top={-10}
                  left="50%"
                  sx={{ bgcolor: 'white', px: 1 }}
                >
                  Or
                </Typography>
              </Box>
              
              {/* Social Logins */}
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />}
                    sx={{ textTransform: 'none' }}
                  >
                    Sign in with Google
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple" />}
                    sx={{ textTransform: 'none' }}
                  >
                    Sign in with Apple
                  </Button>
                </Grid>
              </Grid>
              
              {/* Already have an account? */}
              <Box mt={4} textAlign="center">
                <Typography variant="body2">
                  Have an account? <span style={{ color: '#0F3DDE', cursor: 'pointer' }}>Sign In</span>
                </Typography>
              </Box>
            </Box>

            {/* Right Column - Image */}
            <Box
              component="img"
              src={Image}
              sx={{ 
                borderRadius: 3, 
                width: { xs: '100%', md: '45%' }, // Adjust image size for responsiveness
                height: 'auto', // Maintain aspect ratio
                objectFit: 'cover' 
              }}
            />
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
