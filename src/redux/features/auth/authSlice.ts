// authSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  authError: string;
  admin: boolean;
}
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  authError: '',
  admin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setAuthData: (state, action) => {
    //   state.user = action.payload.user;
    // },
    // clearAuthData: (state) => {
    //   state.user = null;
    // },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.authError = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.admin = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// export const { setAuthData, clearAuthData } = authSlice.actions;
export const { login, logout, setUser, setLoading, setAuthError, setAdmin } =
  authSlice.actions;

export default authSlice.reducer;
