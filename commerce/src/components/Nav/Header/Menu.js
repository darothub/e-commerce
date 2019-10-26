import React, {useState} from 'react';
import CategoryComponent from "../CategoriyComponent/Category";

function Menu(){
    let [hover, setHover] = useState(false)

    function showCategory(e){
        e.type == "mouseover"
          ? setHover((hover = !hover))
          : setTimeout(()=>setHover((hover = false)), 5000);
    }

    return (
      <>
        <nav className="container d-flex nav-wrapper navbar navbar-expand-lg align-items-center ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav nav-menu d-flex justify-content-between">
              <a
                className="nav-item nav-link active"
                href="#/"
                onMouseOver={showCategory}
                onMouseLeave={showCategory}
              >
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Store
              </a>
              <a className="nav-item nav-link" href="#">
                iPhone
              </a>
              <a className="nav-item nav-link " href="#">
                iPad
              </a>
              <a className="nav-item nav-link " href="#">
                Macbook
              </a>
              <a className="nav-item nav-link " href="#">
                Accessories
              </a>
            </div>
          </div>
        </nav>
        {hover == true && <CategoryComponent/>}
      </>
    );
}


export default Menu