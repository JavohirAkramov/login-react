import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let isAuth = localStorage.isAuth;

  if (!isAuth) return <Navigate to="/" />;
  return children;
}

export default ProtectedRoute;
