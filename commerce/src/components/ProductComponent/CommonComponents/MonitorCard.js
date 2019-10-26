import React, { useState, useEffect } from "react";
import StarComponent from '../TopComponents/StarComponent'
// import "bootstrap/dist/css/bootstrap.min.css";

function MonitorCard(){
    return (
      <div className=" d-flex  mx-auto mx-md-0 flex-column justify-content-between mt-md-0 mt-4 monitor-container sub-colo1">
        <div className="img-container-tv mx-auto">
          <img
            className="rounded"
            src={window.location.origin + "/assets/images/monitorsmall.png"}
          />
        </div>
        <h3 className="tv-name text-center">Apple Macbook Pro</h3>
        <div className="d-flex mx-auto">
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
          <StarComponent />
        </div>
        <div className="d-flex p-0 price-container mx-auto">
          <p className="lead p-price">$499</p>
          <p className="lead p-price">$599</p>
        </div>
      </div>
    );
}

export default MonitorCard