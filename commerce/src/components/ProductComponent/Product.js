import React, { useState, useEffect } from "react";
import LeftProductComponent from "./TopComponents/Left";
import RightProductComponent from "./TopComponents/Right";
import LeftBottomProductComponent from './BottomComponents/Left'
import RightBottomProductComponent from './BottomComponents/Right'
import MonitorCard from './CommonComponents/MonitorCard'
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";

function Product() {
  return (
    <>
      {/* <p>This is the product page</p> */}
      <section className=" container flex-wrap ">
        <div className="row   justify-content-md-between ">
          <div className="oculus-rift col-lg-2.9   mx-lg-0 mx-md-auto d-flex flex-column justify-content-md-between mx-auto mx-md-0  align-items-xs-center">
            <div className="mt-5">
              <h3 className="text-center">Oculus Rift</h3>
              <p className="text-center">$349</p>
            </div>
            <div className="img-container align-middle mx-md-auto">
              <img
                className="rounded"
                src={window.location.origin + "/assets/images/oculusmall.png"}
              />
            </div>
            <p className="lead text-center text-primary font-weight-bold">
              SHOP NOW
            </p>
          </div>

          <div className="col-md-9  px-0 d-md-flex flex-column justify-content-md-between ">
            <div className="top-monitor-col d-md-flex justify-content-md-between">
              <MonitorCard />
              <MonitorCard />
              <MonitorCard />
            </div>
            <div className=" d-md-flex justify-content-md-between mt-md-4">
              <MonitorCard />
              <MonitorCard />
              <MonitorCard />
            </div>
          </div>
        </div>
      </section>
      <section className=" container px-0 d-md-flex flex-row flex-wrap justify-content-md-between">
        <div className="d-md-flex flex-column bottom-left-product">
          <div className="d-md-flex justify-content-md-between">
            <MonitorCard />
            <MonitorCard />
          </div>
          <div className="d-md-flex mt-4 justify-content-md-between">
            <MonitorCard />
            <MonitorCard />
          </div>
        </div>

        <div className="d-flex   align-items-center flex-wrap bottom-right-product">
          <div className="iphone-t-p">
            <h2 className="lead">iPhone 8</h2>
            <p className="lead">$399</p>
          </div>
          <img
            className="phone-image"
            src={window.location.origin + "/assets/images/pic.png"}
          />
        </div>
      </section>
    </>
  );
}

export default Product;
