import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MonitorCard from './MonitorCard'

function RightProductComponent() {
  return (
    <>
      <div className="col-10 d-flex right-display align-items-center flex-wrap">
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
        <MonitorCard />
      </div>
    </>
  );
}

export default RightProductComponent