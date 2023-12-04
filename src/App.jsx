import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import PatientLogin from "./pages/PatientLogin";
import PatientEnroll from "./pages/PatientEnroll";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/patient-signin" element={<PatientLogin />} />
      <Route path="/enroll-patient" element={<PatientEnroll />} />
    </Routes>
  );
};

export default App;
