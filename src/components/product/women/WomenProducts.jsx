import React from 'react'
import Style from './WomenProduct.module.css'
import { Link } from 'react-router-dom'


function WomenProducts (props) {
 
  return (
    <>
      <div className={Style.WomenProducts}>
        <Link to={`/products/${props.id}`}><img className={Style.productImg} src={props.img} alt="product photo" /> </Link>
        <p className={Style.name}>{props.name}</p>
        <p>{props.price}</p>
        <span className="material-symbols-outlined">favorite</span>
      </div>
    </>
  )
}

export default WomenProducts



