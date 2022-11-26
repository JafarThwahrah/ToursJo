import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Destination from "./Destination";
import Tourdetails from "./Tourdetails";
import About from "./About";
import Userprofile from "./Userprofile";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/Tourdetails" element={<Tourdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/userprofile/:id" element={<Userprofile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
