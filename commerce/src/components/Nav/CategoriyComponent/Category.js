import React, {useState} from 'react'
import LeftCategoryComponent from './Left'
import MidCategoryComponent from './middle'
import RightCategoryComponent from './Right'

function CategoryComponent(){

    return (
      <div className="container category-wrapper d-flex justify-content-between " >     

        <LeftCategoryComponent />
        <MidCategoryComponent />
        <RightCategoryComponent />
      </div>
    );
}
export default CategoryComponent