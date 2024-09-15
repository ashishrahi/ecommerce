// validationSchema.ts
import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    companyName: Yup.string(),
    streetAddress: Yup.string().required('Street Address is required'),
    zipCode: Yup.string().required('ZIP Code is required'),
    townCity: Yup.string().required('Town / City is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email address is required'),
    additionalInformation: Yup.string(),
    country: Yup.string().required('Country / Region is required'),
    province: Yup.string().required('Province is required'),
});
