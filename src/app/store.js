import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginPatientSlice";
import createPatientReducer from "../features/createPatientSlice";

const store = configureStore({
  reducer: {
    loginpatient: loginReducer,
    createpatient: createPatientReducer,
  },
});

export default store;
