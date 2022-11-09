import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Destination from "./Destination";
import Tourdetails from "./Tourdetails";
import About from "./About";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/Tourdetails" element={<Tourdetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Pages;
