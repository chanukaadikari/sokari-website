import React from "react";
import Styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (   
     <nav className={Styles.navbar} >       
        <Link className = {Styles.logo} to="/">SOKARI</Link>     
        <div className={Styles.menu}>
            <ul className={Styles.menuItems}>
               <li>
                  <Link className={Styles.itemDesign} to="/women">Women</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign} to="/men">Men</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign} to="/kids">Kids</Link>
               </li>
               <li>
                  <Link className={Styles.itemDesign} to="/Aboutus">About Us</Link>
               </li>
            </ul>
        </div>

        <div className={Styles.leftSideNavBar}>
            <div className={Styles.search}>
               <span className="material-symbols-outlined" style={{ color: 'black' }}>search</span>
               <form action="" method="">
                  <label htmlFor="search"></label>
                  <input className={Styles.searchInput} type="search" id="search" name="search" placeholder="SEARCH"/>   
               </form>
            </div>      
                     
         <a className={Styles.wishList} href=""><span className="material-symbols-outlined">favorite</span></a>
         
         <a className={Styles.shoppingCart} href=""><span className="material-symbols-outlined">shopping_cart</span></a>
        </div>
     </nav>
  )
}

export default Navbar;