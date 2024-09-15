import React from 'react';
import { TextField, Button, Box, Typography, Divider, MenuItem, Select, InputLabel, FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

// Define validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  companyName: Yup.string(),
  streetAddress: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  townCity: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  country: Yup.string().required('Required'),
  province: Yup.string().required('Required'),
  additionalInfo: Yup.string(),
  products: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Required'),
      quantity: Yup.number().required('Required'),
      price: Yup.number().required('Required'),
    })
  ).required('At least one product is required'),
  paymentMethod: Yup.string().required('Required'),
});

const ProductOrderForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        zipCode: '',
        townCity: '',
        phone: '',
        email: '',
        country: 'Sri Lanka',
        province: 'Western Province',
        additionalInfo: '',
        products: [
          { name: 'Asgaard sofa', quantity: 1, price: 250000 }
        ],
        paymentMethod: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Handle form submission, e.g., integrate with payment gateway here
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 3 }}>
            {/* Left Side - Billing Details */}
            <Box sx={{ width: '50%', paddingRight: 2 }}>
              <Typography variant="h6">Billing Details</Typography>
              <Field name="firstName">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="First Name"
                    fullWidth
                    margin="normal"
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                )}
              </Field>
              <Field name="lastName">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                )}
              </Field>
              <Field name="companyName">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Company Name (Optional)"
                    fullWidth
                    margin="normal"
                  />
                )}
              </Field>
              <Field name="streetAddress">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Street Address"
                    fullWidth
                    margin="normal"
                    error={touched.streetAddress && Boolean(errors.streetAddress)}
                    helperText={touched.streetAddress && errors.streetAddress}
                  />
                )}
              </Field>
              <Field name="zipCode">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="ZIP Code"
                    fullWidth
                    margin="normal"
                    error={touched.zipCode && Boolean(errors.zipCode)}
                    helperText={touched.zipCode && errors.zipCode}
                  />
                )}
              </Field>
              <Field name="townCity">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Town / City"
                    fullWidth
                    margin="normal"
                    error={touched.townCity && Boolean(errors.townCity)}
                    helperText={touched.townCity && errors.townCity}
                  />
                )}
              </Field>
              <Field name="phone">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Phone"
                    fullWidth
                    margin="normal"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                )}
              </Field>
              <Field name="email">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                )}
              </Field>
              <FormControl fullWidth margin="normal">
                <InputLabel>Country / Region</InputLabel>
                <Field as={Select} name="country" label="Country / Region">
                  <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                  {/* Add more countries if needed */}
                </Field>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Province</InputLabel>
                <Field as={Select} name="province" label="Province">
                  <MenuItem value="Western Province">Western Province</MenuItem>
                  {/* Add more provinces if needed */}
                </Field>
              </FormControl>
              <Field name="additionalInfo">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    label="Additional Information"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                  />
                )}
              </Field>
            </Box>

            {/* Right Side - Products */}
            <Box sx={{ width: '50%', paddingLeft: 2 }}>
              <Typography variant="h6">Order Summary</Typography>
              <FieldArray name="products">
                {({ remove }: any) => (
                  <>
                    {values.products.map((product: any, index: number) => (
                      <Box key={index} sx={{ padding: 2, border: '1px solid #ddd', marginBottom: 2 }}>
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography variant="body2">Quantity: {product.quantity}</Typography>
                        <Typography variant="body2">Price: Rs. {product.price.toFixed(2)}</Typography>
                        <Button variant="outlined" color="error" onClick={() => remove(index)}>Remove</Button>
                      </Box>
                    ))}
                  </>
                )}
              </FieldArray>
              <Divider sx={{ marginY: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">Rs. {values.products.reduce((acc: number, product: any) => acc + (product.price * product.quantity), 0).toFixed(2)}</Typography>
              </Box>

              {/* Payment Method */}
              <Typography variant="h6">Payment Method</Typography>
              <FormControl component="fieldset" fullWidth margin="normal">
                <Field name="paymentMethod">
                  {({ field }: any) => (
                    <RadioGroup {...field} aria-label="payment-method">
                      <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                      <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
                      <FormControlLabel value="Bank Transfer" control={<Radio />} label="Bank Transfer" />
                      {/* Add more payment methods if needed */}
                    </RadioGroup>
                  )}
                </Field>
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                Place Order
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ProductOrderForm;
