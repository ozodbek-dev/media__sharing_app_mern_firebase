import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Video from '../pages/Video'


export default function AllRoutes() {
  return (
 <Fragment>
     <Routes>
      <Route path="/" exact element={<Home />} />

      <Route path="/videos/:id" element={<Video />}/>
      <Route
      path="*"
        element={
          <h1 style={{ fontSize: "100px", color: "white" }}>Page not found</h1>
        }
      />
    </Routes>
 </Fragment>
  );
}
