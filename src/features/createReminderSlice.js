import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  isCreated: false,
  createReminderError: "",
};

export const createReminder = createAsyncThunk(
  "createreminder/createReminder",
  async (formData, { getState }) => {
    const accessToken = getState().loginpatient.accessToken;

    const url = `${liveurl}/reminder`;

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
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

const createReminderSlice = createSlice({
  name: "createreminder",
  initialState,
  reducers: {
    resetError: (state) => {
      state.createReminderError = ""; // or set it to false depending on your state structure
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReminder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.createReminderError = "";
      })
      .addCase(createReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.createReminderError = action.error.message;
      });
  },
});

export const { resetError } = createReminderSlice.actions;
export default createReminderSlice.reducer;
