import React from 'react'
import Style from '../hero/Hero.module.css'

const Hero = () => {
  return (
    <section className={Style.imgContainer}>

        <div className={Style.overlay}></div>
        <div className={Style.photo}></div>
        <div className={Style.text}>
           <p className={Style.textColor}>Dress uniquely, express confidently, and let style define you beautifully</p>
        </div>

    </section>
  )
}

export default Hero