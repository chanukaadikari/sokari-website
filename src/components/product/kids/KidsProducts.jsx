import React from 'react'

function KidsProducts (props) {

 return <>
  
  <img src={props.img} alt="kids Products"/>
  <p>{props.name}</p>
  <p>{props.price}</p>
  <span className="material-symbols-outlined">favorite</span>
    
 </>

}


export default KidsProducts