import React from "react";

function LeftCategoryComponent() {
  return (
      <div className="left-category">
        <h6>Category</h6>
        <div className="sub-category-wrapper d-flex justify-content-between">
        <div className="d-flex flex-column">
            <a>AirPort & Wireless</a>
            <a>AppleCare</a>
            <a>Bags, Shells & Sleeves </a>
            <a>Business & Security</a>
            <a>Cables & Docks</a>
        </div>
        <div className="d-flex flex-column">
            <a>Cameras & Video</a>
            <a>Car & Travel </a>
            <a>Cases & Films </a>
        </div>
        </div>
    </div>
  );
}
export default LeftCategoryComponent;
