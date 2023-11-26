import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CustumTextField from "../../shared/CustomTextField";
import { useCart } from "../../contexts/CartContext";
function Navbar() {
  const { state } = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary border text-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center ">
              <img className="logo-image" src="/assets/logo/Logo.png" />
            </div>

            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="form-box" id="searchBox">
                <CustumTextField />
              </div>

              <div className="d-flex align-items-center gap-3">
                <LocalShippingOutlinedIcon style={{ fontSize: "2rem" }} />
                <Link to="/cart">
                  <span>
                    <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
                    <span style={{ fontWeight: "bolder" }}>
                      {state.items.length}
                    </span>
                  </span>
                </Link>
                <PersonOutlineOutlinedIcon style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
