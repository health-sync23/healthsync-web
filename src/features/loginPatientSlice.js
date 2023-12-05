import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  accessToken: "",
  userId: "",
  isError: "",
};

const loginPatient = createAsyncThunk(
  "loginpatient/loginPatient",
  async (formData) => {
    const url = `${liveurl}/signin`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        throw new Error(errorMessage);
      } else {
        throw error;
      }
    }
  }
);

const loginPatientSlice = createSlice({
  name: "loginpatient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPatient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.accessToken = action.payload.accessToken;
        state.isError = "";
      })
      .addCase(loginPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.userId = "";
        state.accessToken = "";
        state.isError = action.error.message;
      });
  },
});

export default loginPatientSlice.reducer;
