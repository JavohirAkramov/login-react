import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Auth.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";

function Auth() {
  return (
    <div className="auth">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Auth;
