import React from "react";

function MidCategoryComponent() {
  return (
    <div className="mid-category">
      <h6>Category</h6>
      <div className="sub-category-wrapper d-flex justify-content-between">
        <div className="d-flex flex-column">
          <a>Charging Devices</a>
          <a>Connected Home </a>
          <a>Device Care </a>
          <a>Display & Graphic </a>
          <a>Fitness & Sport</a>
        </div>
        <div className="d-flex flex-column">
          <a>Headphones </a>
          <a>HealthKit</a>
        </div>
      </div>
    </div>
  );
}
export default MidCategoryComponent;
