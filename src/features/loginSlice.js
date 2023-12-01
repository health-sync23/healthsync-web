import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loginUser = createAsyncThunk("login/loginUser", (formData) => {});

const loginUserSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default loginUserSlice.reducers;
