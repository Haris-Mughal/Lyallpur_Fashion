import React from "react";
// import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
<<<<<<< HEAD
import CustomTextFieldComponent from "../../shared/CustomTextFieldComponent";
=======
import CustumTextField from "../../shared/CustomTextField";
>>>>>>> d2917e04fd6c3cd10630c902060c945f1bb3702a

export default function Navbar() {
  return (
    <div className="header-area">
      <div className="main-header ">
        <div className="header-top ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="d-flex justify-content-between align-items-center flex-sm">
                  <div className="header-info-left d-flex align-items-center">
                    <div className="logo">
                      <a href="#">
                        <img width={150} src="/assets/logo/Logo.png" />
                      </a>
                    </div>
                    <div className="form-box" id="searchBox">
<<<<<<< HEAD
                      <CustomTextFieldComponent />
=======
                      <CustumTextField />
>>>>>>> d2917e04fd6c3cd10630c902060c945f1bb3702a
                    </div>
                  </div>
                  <div
                    className="header-info-right d-flex align-items-center"
                    id="etc"
                  >
                    <ul id="trackCartPro">
                      <li>
                        <LocalShippingOutlinedIcon
                          style={{ fontSize: "1.75em" }}
                        />
                      </li>
                      <li>
                        <ShoppingCartOutlinedIcon
                          style={{ fontSize: "1.75em" }}
                        />
                      </li>
                      <li className="shopping-card">
                        <PersonOutlineOutlinedIcon
                          style={{ fontSize: "1.75em" }}
                        />
                      </li>
                      {/* <li className="signin">
                        <a href="#" className="btn header-btn">
                          Sign in
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0 p-0" />
    </div>
  );
}
