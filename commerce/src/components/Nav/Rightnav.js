import React from "react";

import "./Nav.css";

function RightNav(){
    return (
      <div className="row flex-xs-column justify-content-md-between">
        <div className="col-md-4.5 pad-zero  mx-auto">
          <a className="text-white " href="#/">
            <i className="material-icons l-height align-middle">
              person_outline
            </i>
            My profile
          </a>
        </div>
        <div className="col-md-1.5 pad-zero mx-auto">
          <a className="text-white" href="#/">
            Items
          </a>
        </div>
        <div className="col-md-1.5  pad-zero mx-auto">
          <a className="text-white" href="#/">
            Price
          </a>
        </div>
        <div className="col-md-1.5  pad-zero ">
          <a className="text-white" href="#/">
            <i className="material-icons l-height marginr-0 align-middle ">
              search
            </i>
          </a>
        </div>
      </div>
    );

}

export default RightNav