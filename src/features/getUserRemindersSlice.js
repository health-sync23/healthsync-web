import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  reminders: [],
  getReminderError: "",
};

export const getReminders = createAsyncThunk(
  "getreminders/getReminders",
  async (_, { getState }) => {
    const userId = getState().loginpatient.userId;
    const accessToken = getState().loginpatient.accessToken;
    const url = `${liveurl}/reminder/${userId}`;
    try {
      const response = await axios.get(url, {
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

const getReminderSlice = createSlice({
  name: "getreminders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReminders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getReminders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reminders = action.payload;
        state.getReminderError = "";
        // console.log("Fulfilled:", action.payload);
      })
      .addCase(getReminders.rejected, (state, action) => {
        state.isLoading = false;
        state.reminders = [];
        state.getReminderError = action.error.message;
      });
  },
});

export default getReminderSlice.reducer;
