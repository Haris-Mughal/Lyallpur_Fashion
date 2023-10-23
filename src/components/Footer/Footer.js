import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-2 mb-0" id="copyright">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center fw-bold mb-0">
              &copy; {year}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
