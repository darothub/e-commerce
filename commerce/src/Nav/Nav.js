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
  let[loading, setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(loading = false)
      }, 1500)
    
    }, [])
    return (
      <>
        {loading ? (
          <button className="btn btn-primary" disabled>
            <span className="spinner-grow spinner-grow-sm"></span>
            Loading..
          </button>
        ) : (
          <div className="container-fluid wrapper d-flex">
            <div className="container d-flex p-2">
              <LeftNav option={navEl} />
              <RightNav />
            </div>
          </div>
        )}
      </>
    );

}

export default Nav