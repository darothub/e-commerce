import React, { useState, useEffect } from "react";
import LeftProductComponent from "./Left";
import RightProductComponent from "./Right";
import "bootstrap/dist/css/bootstrap.min.css";
import './Product.css'


function Product(){
    return (
      <>
        <p>This is the product page</p>
        <section className="container product-wrapper">
          <div className="row d-flex product-container flex-wrap">
            <LeftProductComponent />
            <RightProductComponent />
          </div>
        </section>
      </>
    );
}

export default Product