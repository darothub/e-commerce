import React from 'react'
import Menu from './Menu'
// import CategoryComponent from '../CategoriyComponent/Category'

function HeaderComponent(){
    return (
      <>
        <div className="container header d-flex flex-column">
          <h1>Bouncer</h1>
        </div>
        <Menu />
      
      </>
    );
}

export default HeaderComponent