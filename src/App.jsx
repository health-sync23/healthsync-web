import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import PatientLogin from "./pages/PatientLogin";
import PatientEnroll from "./pages/PatientEnroll";
import { useSelector } from "react-redux";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorSignin from "./pages/DoctorSignin";

const App = () => {
  const { accessToken } = useSelector((state) => state.loginpatient);
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/patient-signin" element={<PatientLogin />} />
      <Route path="/enroll-patient" element={<PatientEnroll />} />
      <Route path="/doctor-signin" element={<DoctorSignin />} />
      {/* protected routes */}
      <Route
        path="/patient-dash"
        element={
          accessToken ? (
            <PatientDashboard />
          ) : (
            <PatientLogin to="/patient-signin" />
          )
        }
      />
    </Routes>
  );
};

export default App;
