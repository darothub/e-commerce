import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MonitorCard from '../CommonComponents/MonitorCard'

function RightProductComponent() {
  return (
    <div className="d-flex top-right-wrapper flex-wrap">
      <div className="d-flex right-cards justify-content-between  flex-wrap">
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
      </div>
      <div className="d-flex right-cards  right-bottom justify-content-between  flex-wrap">
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
      </div>
    </div>
  );
}

export default RightProductComponent