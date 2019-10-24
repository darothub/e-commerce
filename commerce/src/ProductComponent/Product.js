import React, { useState, useEffect } from "react";
import LeftProduct from './Left'
import "bootstrap/dist/css/bootstrap.min.css";
import './Product.css'


function Product(){
    return (
      <>
        <p>This is the product page</p>
        <section className="container product-wrapper">
          <div className="row">
            <LeftProduct />
            <div className="col-8 right-display"></div>
          </div>
        </section>
      </>
    );
}

export default Product