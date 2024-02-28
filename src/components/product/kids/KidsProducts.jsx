import React from 'react'
import Style from './KidsProducts.module.css'


function KidsProducts (props) {

 return <>
  <div className={Style.kidsProducts }>
    <img className={Style.productImg} src={props.img} alt="kids Products"/>
    <p>{props.name}</p>
    <p>{props.price}</p>
    <span className="material-symbols-outlined">favorite</span>
  </div>
 </>

}


export default KidsProducts