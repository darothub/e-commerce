import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css'
import LeftNav from './LeftNav'
import RightNav from './Rightnav'


function Nav(){
    const navEl = [
      {
        key: 1,
        lang: "ENG",
        symbol: "USD"
      },
      {
        key: 1,
        lang: "ENG",
        symbol: "NGN"
      }
    ];
    return (
      <>   
        <div className="container-fluid wrapper d-flex">
          <div className="container d-flex p-2 comp-container">
            <LeftNav option={navEl} />
            <RightNav />
          </div>
        </div>
        
      </>
    );

}

export default Nav