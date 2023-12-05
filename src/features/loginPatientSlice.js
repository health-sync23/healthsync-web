import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  accessToken: "",
  userId: "",
  loginError: false,
};

export const loginPatient = createAsyncThunk(
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
      return response.data;
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
  reducers: {
    reset: (state) => {
      state.loginError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPatient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.id;
        state.accessToken = action.payload.token;
        state.loginError = false;
      })
      .addCase(loginPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.userId = "";
        state.accessToken = "";
        state.loginError = action.error.message;
      });
  },
});

export const { reset } = loginPatientSlice.actions;
export default loginPatientSlice.reducer;
