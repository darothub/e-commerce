import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import Product from './ProductComponent/Product'


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
        ) : 
        (
      <>
        <Nav />
        <Product />
      </>
      )}
    </>
  );
}

export default App;
