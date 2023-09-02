import React from 'react'
import "./brandsearched.scss"
import brands from "../../../data/brands.json"
const BrandsSearched = () => {


    console.log(brands);
  return (
    <div className='brands-searched'>
      <ul>
        {
            brands[0].brands.map((brand,index)=>(
                <li key={index}>{brand}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default BrandsSearched
