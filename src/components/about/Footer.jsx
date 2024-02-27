import React from 'react';
import {Link} from 'react-router-dom'

function Footer () {
    return ( 
      <footer id='about'> 

        <div>
            <Link to="/aboutus">Our Cmpany</Link>
            <Link to="">Contact Us</Link> 
            <a href="">INSTERGRAM</a>
            <a href="">FACEBOOK</a>
        </div>

        <div>
            <Link to="/policy">Privercy Policy</Link>
            <Link to="/policy">Delivery Policy</Link>
            <Link to="/policy">Return & Exchange Policy</Link>
            <Link to="/policy" >Terms and Conditions</Link>  
        </div>

      </footer>  
    )
}

export default Footer;