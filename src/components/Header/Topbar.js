import React from "react";
import { userName } from "../../data/user";
function Topbar() {
  return (
    <div className="topbar bg-primary border">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="nav align-items-center justify-content-center text-dark" id="topbar">
              <li className="nav-item">
                <a href="#" className="nav-link active text-dark" aria-current="page">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  NEW IN
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  WOMEN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
