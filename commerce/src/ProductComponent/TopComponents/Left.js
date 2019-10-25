import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LeftProductComponent(){
    return (
      <div className="left-display d-flex flex-column justify-content-between align-items-center">
        <div className=" p-name-price d-flex flex-column align-items-center">
          <h3>Oculus Rift</h3>
          <p>$349</p>
        </div>
        <div className="img-container">
          <img
            className="rounded"
            src={window.location.origin + "/assets/images/oculusmall.png"}
          />
        </div>
        <p className="lead p">SHOP NOW</p>
      </div>
    );
}

export default LeftProductComponent;