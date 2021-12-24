import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    setAuth(localStorage.getItem("isAuth"));
    setAdmin(localStorage.getItem("isAdmin"));

    localStorage.getItem("isAuth") === "true" ? setAuth(true) : setAuth(false);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {!isAuth ? (
          <Route path="/" element={<SignUp />} />
        ) : isAdmin ? (
          <Route path="/" element={<Admin />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
