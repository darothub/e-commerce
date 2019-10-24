import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css'
import LeftNav from './LeftNav'
import RightNav from './Rightnav'


function Nav(){
    return (
      <>
        <div className="container-fluid wrapper d-flex">
          <div className="container d-flex p-2">
            <LeftNav />
            <RightNav />
          </div>
        </div>
      </>
    );

}

export default Nav