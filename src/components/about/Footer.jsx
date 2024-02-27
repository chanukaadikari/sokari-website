import React from 'react';
import {Link} from 'react-router-dom'

function Footer () {
    return ( 
      <footer id='about'> 

        <div>
            <Link to="">Our Cmpany</Link>
            <Link to="">Contact Us</Link> 
            <a href="">INSTERGRAM</a>
            <a href="">FACEBOOK</a>
        </div>

        <div>
            <Link to="">Privercy Policy</Link>
            <Link to="">Delivery Policy</Link>
            <Link to="">Return & Exchange Policy</Link>
            <Link to="" >Terms and Conditions</Link>  
        </div>

      </footer>  
    )
}

export default Footer;