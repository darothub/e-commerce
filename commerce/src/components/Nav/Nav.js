import React, {useState, useEffect} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css'
import LeftNav from './LeftNav'
import RightNav from './Rightnav'
import HeaderComponent from './Header/Header'


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
      <div className="container-fluid  wrapper">
        <div className="container mx-md-auto  con">
          <div className="row justify-content-between">
           <LeftNav option ={navEl}/>
            <div className="col-md-5 px-0 align-self-center">
              <div className="container-fluid  align-self-center">
                <RightNav />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderComponent />
      </>
    );

}

export default Nav