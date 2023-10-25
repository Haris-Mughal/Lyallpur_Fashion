import React from "react";
// import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <ul className="nav justify-content-center" id="topbar">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          NEW IN
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          MEN
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          WOMEN
        </a>
      </li>
    </ul>
  );
}
