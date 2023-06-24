import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const signUpSchema = yup.object().shape({
  userName: yup.string().min(3).max(20).required('Enter First Name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Enter Email'),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Minimum of 6 characters, 1 uppercase, 1 lowercase, 1 numeric digit',
    })
    .min(6)
    .required('Enter password'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password'),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Enter Email'),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Minimum of 6 characters, 1 uppercase, 1 lowercase, 1 numeric digit',
    })
    .min(6)
    .required('Enter password'),
});
