import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginPatientSlice";
import createPatientReducer from "../features/createPatientSlice";
import getUserReducer from "../features/getUserSlice";
import getUserRemindersReducer from "../features/getUserRemindersSlice";
import createReminderReducer from "../features/createReminderSlice";

const store = configureStore({
  reducer: {
    loginpatient: loginReducer,
    createpatient: createPatientReducer,
    getuser: getUserReducer,
    getreminders: getUserRemindersReducer,
    createreminder: createReminderReducer,
  },
});

export default store;
