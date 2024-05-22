import React from 'react-dom'
import Style from './menProducts.module.css'
import { Link } from 'react-router-dom'

function MenProducts (props) {

    return (
        <>
        <div className={Style.menProducts}>
          <Link to={`/products/${props.id}`}><img className={Style.productImg} src={props.img.img01} alt="product photo" /></Link>
          <p>{props.name}</p>
          <p className={Style.productPrice}>{props.price}</p>
          <span className="material-symbols-outlined">favorite</span> 
        </div>
        </>
    )
}

export default MenProducts