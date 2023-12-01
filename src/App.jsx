import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
    </Routes>
  );
};

export default App;
