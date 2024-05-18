import React from 'react-dom'
import Style from './menProducts.module.css'

function MenProducts (props) {

    return (
        <>
        <div className={Style.menProducts}>
          <img className={Style.productImg} src={props.img} alt="Men Products" />
          <p>{props.name}</p>
          <p>{props.price}</p>
          <span className="material-symbols-outlined">favorite</span> 
        </div>
        </>
    )
}

export default MenProducts