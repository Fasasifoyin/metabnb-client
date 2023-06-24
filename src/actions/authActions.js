import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const register = createAsyncThunk(
  '/user/register',
  async (form, { rejectWithValue }) => {
    try {
      const { navigate, toast } = form;
      const { data } = await api.register(form);
      navigate('/');
      toast({
        title: 'Register Successful',
        description: `Welcome ${data.userName}`,
        duration: 4000,
        isClosable: true,
        status: 'success',
        position: 'top',
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  '/user/login',
  async (form, { rejectWithValue }) => {
    try {
      const { navigate, toast } = form;
      const { data } = await api.login(form);
      toast({
        title: 'Login successful',
        description: `Welcome ${data.userName}`,
        duration: 4000,
        isClosable: true,
        status: 'success',
        position: 'top',
      });
      navigate('/');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
