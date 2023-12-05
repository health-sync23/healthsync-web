import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginPatientSlice";
import createPatientReducer from "../features/createPatientSlice";
import getUserReducer from "../features/getUserSlice";

const store = configureStore({
  reducer: {
    loginpatient: loginReducer,
    createpatient: createPatientReducer,
    getuser: getUserReducer,
  },
});

export default store;
