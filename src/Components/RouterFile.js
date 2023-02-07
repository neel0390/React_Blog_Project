import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import BlogDetails from "./BlogDetails";

const RouterFile = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/:type/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
};

export default RouterFile;
