import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function RightNav(){
    return (
      <>
        <div className="d-flex right-nav">
          <div className="list-inline">
            <li className="d-inlineflex">
              <span className="icon-wrapper ">
                <i class="material-icons person align-middle">person_outline</i>
              </span>
              <a className="anchors" href="#/">
                My profile
              </a>
            </li>
            <li>
              <a className="anchors" href="#/">
                Items
              </a>
            </li>
            <li>
              <a className="anchors" href="#/">
                Price
              </a>
            </li>
            <li>
              <a href="#/">
                <i class="material-icons align-middle">search</i>
              </a>
            </li>
          </div>
        </div>
      </>
    );

}

export default RightNav