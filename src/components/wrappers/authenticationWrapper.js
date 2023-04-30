import React, { useEffect, useState } from "react";
import Login from "../login";
import Dashboard from "../../pages/dashboard";
import { Navigate, redirect } from "react-router";

export default function AuthenticationWrapper({
  children,
  isAuthenticatedRoute,
  isLoggedIn,
}) {
  if (isLoggedIn) {
    if (isAuthenticatedRoute) {
      return children;
    }
    return <Navigate to="/dashboard" replace={true} />;
  }

  if (isAuthenticatedRoute) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
