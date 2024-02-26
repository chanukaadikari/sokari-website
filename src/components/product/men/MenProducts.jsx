import React from 'react-dom'

function MenProducts (props) {

    return (
        <>
          <img src={props.img} alt="Men Products" />
          <p>{props.name}</p>
          <p>{props.price}</p>
          <span className="material-symbols-outlined">favorite</span>
        </>
    )
}

export default MenProducts