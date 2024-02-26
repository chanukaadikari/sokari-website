import React from 'react'

function WomenProducts (props) {

  return (
    <>
      <img src={props.img} alt="product photo" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <span className="material-symbols-outlined">favorite</span>
    </>
  )
}

export default WomenProducts