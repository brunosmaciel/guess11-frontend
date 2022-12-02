/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../services/simulateApi';

// Define a type for the slice state
type AuthState = {
  isLoggedIn: boolean;
  jwt: string | null;
  user: {
    username: string;
    avatar: string;
  };
  expiresAt: number;
};
type UserData = {
  email: string;
  password: string;
};

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  jwt: null,
  user: {
    username: '',
    avatar: '',
  },
  expiresAt: Date.now() + 1000 * 60,
};

export const fetchData = createAsyncThunk(
  'user/login',
  async ({ email, password }: UserData, { rejectWithValue }) => {
    try {
      const response = await api({ email, password });

      return response;
    } catch (e: unknown) {
      return rejectWithValue(404);
    }
  },
);
// export const updateUserData = createAsyncThunk(
//   'user/login',
//   async (id: string, { rejectWithValue }) => {
//     try {
//       const response = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       return response.data;
//     } catch (e: unknown) {
//       console.log(e);
//       return rejectWithValue(e);
//     }
//   },
// );

export const authSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.expiresAt = Date.now() + 1000 * 60;
      })
      .addCase(fetchData.rejected, () => {
        return initialState;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice;
