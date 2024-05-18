import React from 'react'
import Style from './WomenProduct.module.css'
import { Link } from 'react-router-dom'


function WomenProducts (props) {
 
  return (
    <>
      <div className={Style.WomenProducts}>
        <img className={Style.productImg} src={props.img} alt="product photo" /> 
        <p className={Style.name}>{props.name}</p>
        <p>{props.price}</p>
        <span className="material-symbols-outlined">favorite</span>
        <Link to={`/products/${props.id}`}>Add to Cart</Link>
        
      </div>
      
    </>
  )
}

export default WomenProducts



