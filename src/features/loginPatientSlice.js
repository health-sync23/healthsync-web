import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  accessToken: "",
  userId: "",
  isError: "",
};

const loginPatient = createAsyncThunk(
  "loginpatient/loginPatient",
  (formData) => {}
);

const loginUserSlice = createSlice({
  name: "loginpatient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginPatient.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default loginUserSlice.reducer;
