import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;