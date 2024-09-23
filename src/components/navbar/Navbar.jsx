import React from "react";
import Styles from "./Navbar.module.css"
import { Link } from 'react-router-dom' 

function Navbar() {
  return (   
     <nav className={Styles.navbar} > 
         <div>
         <Link className = {Styles.logo} to="/">SOKARI <span className = {Styles.name} >by Sadevni</span></Link>  
         </div>      
            
        <div className={Styles.menu}>
            <ul className={Styles.menuItems}>
               <li>
               <Link className={Styles.itemDesign} to="/">Home</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign} to="/women">Women</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign} to="/men">Men</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign}>Brides</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign}>Grooms</Link>
               </li>
             {/*  <li>
                  <Link className={Styles.itemDesign} to="/kids">Kids</Link>
               </li>
             */} 
               <li>
                  <Link className={Styles.itemDesign} to="/aboutus">About Us</Link>
               </li> 
            </ul>
        </div>

        <div className={Styles.navLoginCart}> 
            <a className={Styles.contactNumber} href="tel:0711855027">Contact Us:  071-185-5027</a>  
            <a className={Styles.wishList} href=""><span className="material-symbols-outlined">favorite</span></a>
            <Link className={Styles.shoppingCart} to="/cart"> <span className="material-symbols-outlined">shopping_cart</span> </Link>
            <div className={Styles.navCartCount}>0</div>
        </div> 
        
     </nav>
  )
}

export default Navbar;