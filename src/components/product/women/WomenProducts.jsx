import React from 'react'
import Style from './WomenProduct.module.css'


function WomenProducts (props) {

  return (
    <>
      <img className={Style.womenProduct} src={props.img} alt="product photo" />
      <p className={Style.name}>{props.name}</p>
      <p>{props.price}</p>
      <span className="material-symbols-outlined">favorite</span>
    </>
  )
}

export default WomenProducts