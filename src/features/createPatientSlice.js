import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  isError: false,
  isCreated: false,
};

export const createPatient = createAsyncThunk(
  "createpatient/createPatient",
  async (form) => {
    const url = `${liveurl}/new-patient`;
    try {
      const response = await axios.post(url, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

const createPatientSlice = createSlice({
  name: "createpatient",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = ""; // or set it to false depending on your state structure
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPatient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.isError = false;
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.isError = action.error.message;
      });
  },
});

export const { clearError } = createPatientSlice.actions;

export default createPatientSlice.reducer;
