import React from "react";
// import { Link } from "react-router-dom";

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
                      <input
                        id="search_input"
                        type="text"
                        name="Search"
                        placeholder="Find your favourite"
                      />
                      {/* <div className="search-icon"> */}
                      <svg
                        id="search"
                        width={27}
                        height={27}
                        className="fs-2"
                        fill="none"
                        stroke="#808080"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      {/* </div> */}
                    </div>
                  </div>
                  <div
                    className="header-info-right d-flex align-items-center"
                    id="etc"
                  >
                    <ul id="trackCartPro">
                      <li>
                        <svg
                          cursor={"pointer"}
                          id="tracking"
                          width={30}
                          height={30}
                          className="fs-2"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.414 18.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z"></path>
                          <path d="M5.586 18.414a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828Z"></path>
                          <path d="M19 17h1a1 1 0 0 0 1-1v-4.586a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 16.586 7H14a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1"></path>
                          <path d="M5 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9"></path>
                        </svg>
                      </li>
                      <li>
                        <svg
                          cursor={"pointer"}
                          id="cart"
                          width={30}
                          height={30}
                          className="fs-2"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.586 17.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828Z"></path>
                          <path d="M8.414 20.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z"></path>
                          <path d="m7 13-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"></path>
                          <path d="M5.4 5H21l-4 8H7L5.4 5Z"></path>
                          <path d="M3 3h2l.4 2"></path>
                        </svg>
                      </li>
                      <li className="shopping-card">
                        <svg
                          cursor={"pointer"}
                          id="profile"
                          width={30}
                          height={30}
                          className="fs-2"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.828 9.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"></path>
                          <path d="M7.05 16.05A7 7 0 0 1 19 21H5a7 7 0 0 1 2.05-4.95Z"></path>
                        </svg>
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
