import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


function StarComponent(){
    return (
      <>
        <div className="d-flex stars flex-row">
          <img
            className="rounded "
            src={window.location.origin + "/assets/images/star-solid.svg"}
          />
        </div>
      </>
    );
}

export default StarComponent;