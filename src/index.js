import React from "react";
import ReactDOM from "react-dom/client";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import ProtectedComponent from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    <ProtectedComponent />
  </BrowserRouter>
);
