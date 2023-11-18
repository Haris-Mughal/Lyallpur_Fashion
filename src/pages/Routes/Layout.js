import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
// import { useAuth } from "./../contexts/AuthContext";

export const Layout = () => {
  // const { isAuthenticated } = useAuth();

  // if (isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
<<<<<<< HEAD
      <Outlet />
    </>
  );
};
=======
      {/* <Navbar /> */}
      {/* <OutletSection> */}
      <Outlet />
      {/* </OutletSection> */}
      {/* <Footer /> */}
    </>
  );
};
// const OutletSection = styled.div`
//   width: "100vw";
// `;
>>>>>>> c303197d03cbb617de42ee3e709e092fbe152dc3
