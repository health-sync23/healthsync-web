import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  isError: "",
  isCreated: false,
};

const createPatient = createAsyncThunk(
  "createpatient/createPatient",
  async (formData) => {
    const url = `${liveurl}/new-patient`;
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

const createPatientSlice = createSlice({
  name: "createpatient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPatient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.isError = "";
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.isError = action.payload;
      });
  },
});

export default createPatientSlice.reducer;
