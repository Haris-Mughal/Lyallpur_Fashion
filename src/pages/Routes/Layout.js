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
      <Outlet />
    </>
  );
};
