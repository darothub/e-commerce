import React, { useState, useEffect } from "react";
import StarComponent from './StarComponent'
import "bootstrap/dist/css/bootstrap.min.css";

function MonitorCard(){
    return (
      <>
          <div className="tv-card d-flex flex-column align-items-center">
            <div className="img-container-tv">
              <img
                className="rounded"
                src={window.location.origin + "/assets/images/monitorsmall.png"}
              />
            </div>
            <h3 className="tv-name">Apple Macbook Pro</h3>
            <div className="d-flex">
              <StarComponent />
              <StarComponent />
              <StarComponent />
              <StarComponent />
              <StarComponent />
            </div>
            <div className="d-flex price-container">
              <p className="lead p-price">$499</p>
              <p className="lead p-price">$599</p>
            </div>
          </div>
      </>
    );
}

export default MonitorCard