import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import Product from './components/ProductComponent/Product'


function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading((loading = false));
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <button className="btn btn-primary" disabled>
          <span className="spinner-grow spinner-grow-sm"></span>
          Loading..
        </button>
      ) : (
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-12 px-0 col-md-12">
              <Nav />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Product />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
