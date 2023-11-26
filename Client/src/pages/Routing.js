import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./Login";
// Pages
import Home from "./Home";
import Men from "./Men";
import About from "./About";
import Contact from "./Contact";
import Cart from "../shared/Cart";

function Routing() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default Routing;
