import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import styled from "styled-components";

export default function index() {
  return (
    <HeaderSection>
      <Navbar />
      <Topbar />
    </HeaderSection>
  );
}
const HeaderSection = styled.div`
  position: fixed;
  z-index: 1000;
`;
