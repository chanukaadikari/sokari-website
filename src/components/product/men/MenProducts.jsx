import React from 'react-dom'
import Style from './menProducts.module.css'

function MenProducts (props) {

    return (
        <>
          <img className={Style.menProducts} src={props.img} alt="Men Products" />
          <p>{props.name}</p>
          <p>{props.price}</p>
          <span className="material-symbols-outlined">favorite</span>
        </>
    )
}

export default MenProducts