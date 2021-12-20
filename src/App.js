import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
}
