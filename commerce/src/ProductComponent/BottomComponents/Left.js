import React, { useState, useEffect } from "react";
import MonitorCard from '../CommonComponents/MonitorCard'
import "bootstrap/dist/css/bootstrap.min.css";

function LeftBottomProductComponent() {
  return (
    <div className="d-flex  mt bottom-left-wrapper flex-wrap">
      <div className="d-flex  bottom-left    justify-content-between flex-wrap">
        <MonitorCard />
        <MonitorCard />
      </div>
      <div className="d-flex mt  bottom-left justify-content-between flex-wrap">
        <MonitorCard />
        <MonitorCard />
      </div>
    </div>
  );
}

export default LeftBottomProductComponent;
