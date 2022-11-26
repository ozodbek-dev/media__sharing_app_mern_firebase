import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
      path="*"
        element={
          <h1 style={{ fontSize: "100px", color: "white" }}>Page not found</h1>
        }
      />
    </Routes>
  );
}
