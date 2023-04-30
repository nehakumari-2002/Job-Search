import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Forgotpassword from "./components/forgotpassword";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./pages/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AuthenticationWrapper from "./components/wrappers/authenticationWrapper";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={false}
              isLoggedIn={isLoggedIn}
            >
              <Login />
            </AuthenticationWrapper>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={false}
              isLoggedIn={isLoggedIn}
            >
              <Registration />
            </AuthenticationWrapper>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={false}
              isLoggedIn={isLoggedIn}
            >
              <Login />
            </AuthenticationWrapper>
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={false}
              isLoggedIn={isLoggedIn}
            >
              <Forgotpassword />
            </AuthenticationWrapper>
          }
        />
        <Route
          exact
          path="*"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={false}
              isLoggedIn={isLoggedIn}
            >
              <Login />
            </AuthenticationWrapper>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <AuthenticationWrapper
              isAuthenticatedRoute={true}
              isLoggedIn={isLoggedIn}
            >
              <Dashboard />
            </AuthenticationWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
