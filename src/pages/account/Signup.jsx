import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Box,
  Text,
  useToast,
} from '@chakra-ui/react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useFormik } from 'formik';
import { signUpSchema } from '../../utilities/formikValidation';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/authActions';
import { Error, Status, changeError } from '../../features/authSlice';
import Spinner from '../../utilities/Spinner';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const status = useSelector(Status);
  const error = useSelector(Error);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    right: '5px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    boxSize: 7,
    zIndex: 10,
  };

  const onSubmit = values => {
    const value = { ...values, navigate, toast };
    dispatch(register(value));
  };

  const errorToast = () => {
    toast({
      title: 'Failed',
      description: error,
      isClosable: true,
      position: 'top',
      status: 'error',
      duration: 4000
    });
  };

  useEffect(() => {
    error && errorToast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const { values, errors, touched, getFieldProps, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        userName: '',
        email: '',
        password: '',
        confirm: '',
      },
      validationSchema: signUpSchema,
      onSubmit,
    });

  const showing = password => {
    if (password === true) {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  useEffect(() => {
    dispatch(changeError(null));
  }, [error, dispatch]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <FormControl mb="40px">
          <FormLabel>Enter UserName</FormLabel>
          <Input
            type="text"
            value={values.userName}
            onBlur={handleBlur}
            {...getFieldProps('userName')}
            borderColor={errors.userName && touched.userName ? 'red' : ''}
          />
          {errors.userName && touched.userName && (
            <Text fontSize="sm" color="red.400">
              {errors.userName}
            </Text>
          )}
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Enter Email</FormLabel>
          <Input
            type="email"
            value={values.email}
            onBlur={handleBlur}
            {...getFieldProps('email')}
            borderColor={errors.email && touched.email ? 'red' : ''}
          />
          {errors.email && touched.email && (
            <Text fontSize="sm" color="red.400">
              {errors.email}
            </Text>
          )}
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Enter Password</FormLabel>
          <Box pos="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onBlur={handleBlur}
              {...getFieldProps('password')}
              borderColor={errors.password && touched.password ? 'red' : ''}
            />
            {showPassword ? (
              <Icon
                sx={iconStyle}
                as={BsFillEyeFill}
                onClick={() => showing(true)}
              />
            ) : (
              <Icon
                sx={iconStyle}
                as={BsFillEyeSlashFill}
                onClick={() => showing(true)}
              />
            )}
          </Box>
          {errors.password && touched.password && (
            <Text fontSize="sm" color="red.400">
              {errors.password}
            </Text>
          )}
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Confirm Password</FormLabel>
          <Box pos="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              value={values.confirm}
              onBlur={handleBlur}
              {...getFieldProps('confirm')}
              borderColor={errors.confirm && touched.confirm ? 'red' : ''}
            />
            {showConfirmPassword ? (
              <Icon
                sx={iconStyle}
                as={BsFillEyeFill}
                onClick={() => showing(false)}
              />
            ) : (
              <Icon
                sx={iconStyle}
                as={BsFillEyeSlashFill}
                onClick={() => showing(false)}
              />
            )}
          </Box>
          {errors.confirm && touched.confirm && (
            <Text fontSize="sm" color="red.400">
              {errors.confirm}
            </Text>
          )}
        </FormControl>
        <Button
          _hover={{ boxShadow: `0px 0px 0px 4px #A0227950` }}
          bg={`accent`}
          w="100%"
          h="60px"
          color="white"
          type="submit"
        >
          {status === 'pending' ? <Spinner /> : 'Sign in'}
        </Button>
      </form>
    </>
  );
};

export default Signup;
