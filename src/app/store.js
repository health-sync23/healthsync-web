import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginPatientSlice";

const store = configureStore({
  reducer: {
    loginpatient: loginReducer,
  },
});

export default store;
