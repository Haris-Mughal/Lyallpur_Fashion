// import React from "react";
// import { Link } from "react-router-dom";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import CustumTextField from "../../shared/CustomTextField";

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-primary border text-dark">
//         <div className="container">
//           <img className="logo-image" src="/assets/logo/Logo.png" />

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button> 
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <div className="d-flex align-items-center justify-content-between">
//             <div className="form-box" id="searchBox">
//               <CustumTextField />
//             </div>
//               <div className="d-flex align-items-center gap-3">
//                 <LocalShippingOutlinedIcon style={{ fontSize: "2rem" }} />
//                 <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
//                 <PersonOutlineOutlinedIcon style={{ fontSize: "2rem" }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CustumTextField from "../../shared/CustomTextField";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary border text-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center ">
              <img className="logo-image" src="/assets/logo/Logo.png" />

              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
            </div>

              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="form-box" id="searchBox">
                  <CustumTextField />
                </div>

                <div className="d-flex align-items-center gap-3">
                  <LocalShippingOutlinedIcon style={{ fontSize: "2rem" }} />
                  <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
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
