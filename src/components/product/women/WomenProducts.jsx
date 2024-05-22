import React from 'react'
import Style from './WomenProduct.module.css'
import { Link } from 'react-router-dom'


function WomenProducts (props) {
 
  return (
    <>
      <div className={Style.WomenProducts}>
        <Link to={`/products/${props.id}`}><img className={Style.productImg} src={props.img.img01} alt="product photo" /> </Link>
        <p className={Style.productName}>{props.name}</p>
        <p className={Style.productPrice}>{props.price}</p>
        <span className="material-symbols-outlined">favorite</span>
      </div>
    </>
  )
}

export default WomenProducts



