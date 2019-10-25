import React, { useState, useEffect } from "react";
import LeftProductComponent from "./TopComponents/Left";
import RightProductComponent from "./TopComponents/Right";
import LeftBottomProductComponent from './BottomComponents/Left'
import RightBottomProductComponent from './BottomComponents/Right'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";

function Product() {
  return (
    <>
      <p>This is the product page</p>
      <section className=" container d-flex product-wrapper flex-wrap ">
        <div className=" d-flex flex-row product-container justify-content-between">
          <LeftProductComponent />
          <RightProductComponent />
        </div>
      </section>
      <section className=" container d-flex product-wrapper flex-wrap ">
        <div className=" d-flex flex-row product-container justify-content-between">
          <LeftBottomProductComponent />
          <RightBottomProductComponent />
        </div>
      </section>
    </>
  );
}

export default Product;
