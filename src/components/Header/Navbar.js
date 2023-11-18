import React from "react";
// import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CustumTextField from "../../shared/CustomTextField";

export default function Navbar() {
  return (
<>
         
                <div className="d-flex justify-content-between align-items-center flex-sm" id="header-main">
                  <div className="header-info-left d-flex align-items-center">
                    <div className="logo">
                        <img className="logo-image" src="/assets/logo/Logo.png" />
                    </div>
                    <div className="form-box" id="searchBox">
                      <CustumTextField />
                    </div>
                  </div>
                  <div id="icons">
                    <LocalShippingOutlinedIcon style={{fontSize: "2rem"}}/>
                    <ShoppingCartOutlinedIcon style={{fontSize: "2rem"}}/>
                    <PersonOutlineOutlinedIcon style={{fontSize: "2rem"}}/>
                  </div>
                </div>
      <hr className="m-0 p-0" style={{width: "100vw", backgroundColor: "grey", color: "grey"}} />
      </>
  );
}
