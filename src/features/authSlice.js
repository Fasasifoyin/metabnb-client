import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../actions/authActions';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      const check = JSON.parse(localStorage.getItem('metabnb'));
      if (check) {
        return {
          ...state,
          user: check,
        };
      }
    },
    changeError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    logout: (state, action) => {
      localStorage.removeItem('metabnb');
      return {
        ...state,
        user: {},
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        return {
          ...state,
          status: 'pending',
        };
      })
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem('metabnb', JSON.stringify(action?.payload));
        return {
          ...state,
          status: 'successful',
          user: action.payload,
        };
      })
      .addCase(register.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          status: 'failed',
        };
      })
      .addCase(login.pending, (state, action) => {
        return {
          ...state,
          status: 'pending',
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('metabnb', JSON.stringify(action?.payload));
        return {
          ...state,
          status: 'successful',
          user: action.payload,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          status: 'failed',
        };
      });
  },
});

export const selectedUser = state => state.user.user;
export const Status = state => state.user.status;
export const Error = state => state.user.error;

export const { getUser, changeError, logout } = userSlice.actions;

export default userSlice.reducer;
