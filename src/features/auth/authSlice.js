import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUser, login } from "./authApi";

const initialState = {
  loggedInUserToken: null,
  status: "idle",
  userList: [],
  // user: null,
  error: null,
  // userChecked: false,
  // mailSent: false,
  // passwordReset: false,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
export const loginUserAsync = createAsyncThunk(
  "auth/login",
  async (userData) => {
    const response = await login(userData);
    return response.data;
  }
);

export const getUserAsync = createAsyncThunk("auth/getUser", async () => {
  const response = await getAllUser();
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userList = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      });
  },
});

export const userData = (state) => state.auth.userList;

export default authSlice.reducer;
