import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Forgotpassword from "./components/forgotpassword";
import Login from "./components/login";
import Registration from "./components/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
