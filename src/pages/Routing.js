// import React from "react";
// import { Routes, Route } from "react-router-dom";
// //Components
// import Header from "../components/Header";
// import Footer from "../components/Footer/Footer";
// import Login from "./Login";
// //Pages
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// function Routing() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default Routing;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Header from "../components/Header";
import Footer from '../components/Footer';
import Login from './Login';
// Pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Routing() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default Routing;

