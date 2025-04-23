import { clientAuthAPI } from "@/api/client";
import { removeToken, setToken } from "@/api/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  const result = await clientAuthAPI.register(userData);
  const {
    data: { data },
    success,
  } = result;
  if (success) {
    setToken(data.token);
    setToken(data.refreshToken, "refreshToken");
    return data;
  }
  return rejectWithValue(result.error || result.message);
});

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  const result = await clientAuthAPI.login(credentials);
  const {
    data: { data },
    success,
  } = result;
  if (success) {
    setToken(data.token);
    setToken(data.refreshToken, "refreshToken");
    return data;
  }
  return rejectWithValue(result.error || result.message);
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  const result = await clientAuthAPI.logout();
  if (result.success) {
    removeToken();
    removeToken("refreshToken");
    return null;
  }
  return rejectWithValue(result.error || result.message);
});

export const initializeAuth = createAsyncThunk(
  "auth/initialize",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) return null;

    const result = await clientAuthAPI.getProfile();
    if (result.success) {
      return result.data;
    }
    return rejectWithValue(result.error || result.message);
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    initialized: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.initialized = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.initialized = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.initialized = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Initialize
      .addCase(initializeAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.user = action.payload;
        }
        state.initialized = true;
      })
      .addCase(initializeAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.initialized = true;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
