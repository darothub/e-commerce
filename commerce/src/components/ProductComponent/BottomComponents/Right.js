import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function RightBottomProductComponent() {
  return (
    <>
      <div className="d-flex right-bottom-display mt align-items-center flex-wrap">
        <div className="iphone-t-p">
          <h2 className="lead">iPhone 8</h2>
          <p className="lead">$399</p>
        </div>
        <img
          className="phone-image"
          src={window.location.origin + "/assets/images/pic.png"}
        />
      </div>
    </>
  );
}

export default RightBottomProductComponent;
