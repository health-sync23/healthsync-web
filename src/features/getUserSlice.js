import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const liveurl = "https://healthsync.onrender.com";

const initialState = {
  isLoading: false,
  user: "",
  getUserError: "",
};

export const getUser = createAsyncThunk(
  "getuser/getUser",
  async (_, { getState }) => {
    const userId = getState().loginpatient.userId;
    const accessToken = getState().loginpatient.accessToken;
    const url = `${liveurl}/patient/${userId}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
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

const getUserSlice = createSlice({
  name: "getuser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.getUserError = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.getUserError = action.error.message;
      });
  },
});

export default getUserSlice.reducer;
