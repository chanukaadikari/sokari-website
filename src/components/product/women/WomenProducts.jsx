import React from 'react'
import Style from './WomenProduct.module.css'


function WomenProducts (props) {
   
  return (
    <>
      <div className={Style.WomenProducts}>
        <img className={Style.productImg} src={props.img} alt="product photo" /> 
        <p className={Style.name}>{props.name}</p>
        <p>{props.price}</p>
        <span className="material-symbols-outlined">favorite</span>
      </div>
      
    </>
  )
}

export default WomenProducts



