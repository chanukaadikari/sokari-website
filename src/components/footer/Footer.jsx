import React from 'react'
import {Link} from 'react-router-dom'
import Style from '../footer/Footer.module.css'

function Footer () {
    return ( 
      <footer className={Style.gridContainer} id='about'> {/*This id use to scroll from navbar about section to footer section*/}

        <section className={Style.logo}>
             <Link to="/">SOKARI</Link>
        </section>

        <section className={Style.informationSection}>
            <h2 >About us</h2>           
            <Link to="/aboutus">Our Company</Link>
            <p>Contact us</p> 
            <p>Hotline - 071 185 5027</p>
            <div className={Style.socialMedia}>
              <a href="https://www.facebook.com/profile.php?id=61554738727899" target='blank'>
              <img className={Style.facebookLogo} src="../src/assets/socialmedia-icon/facebook.svg" alt="facebook" />
              </a>
              <a href="https://wa.me/+94711855027">
              <img className={Style.whatsappLogo} src="../src/assets/socialmedia-icon/whatsapp.svg" alt="facebook" />
              </a>
            </div>
           
        </section>

        <section className={Style.policySection}>
            <h2>Policies</h2>
            <Link to="/policy">Privercy Policy</Link>
            <Link to="/policy">Delivery Policy</Link>
            <Link to="/policy">Return & Exchange Policy</Link>
            <Link to="/policy" >Terms and Conditions</Link>  
        </section>

      </footer>  
    )
}

export default Footer;