import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function LeftNav() {
  return (
    <>
      <div className="d-flex">
        <select>
          <option>EN</option>
        </select>
        <select>
          <option>USD</option>
        </select>
      </div>
    </>
  );
}

export default LeftNav;
