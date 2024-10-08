import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from "react-router-dom"
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'
import MenProducts from '../components/product/men/MenProducts'
import menProductList from '../components/product/men/menProductsList'
import KidsProducts from '../components/product/kids/KidsProducts'
import KidsProductList from '../components/product/kids/kidsProductsList'
import Footer from '../components/footer/Footer'
import Style from '../pages/Home.module.css'
import Hero from '../components/hero/Hero'

function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <section>
      <Hero />
    </section> 
     
    <main className={Style.gridContainer}>

      <section className={Style.gridItems}>
          <h2 className={Style.heading} >Women's Collection</h2>
          <div className={Style.productItem}>
            {womenProductsList.map(
              function createWomenProducts (womenProductsList) {
                return (
                  <WomenProducts 
                    key={womenProductsList.id}
                    id={womenProductsList.id}
                    img={womenProductsList.img}
                    name={womenProductsList.name}
                    price={womenProductsList.price}
                  />
                )
              }).slice(0, 5)}  
          </div>
          <Link className={Style.seeMore} to="/women" >SEE MORE</Link>    
      </section>

      <section className={Style.gridItems}>
         <h2 className={Style.heading}>Men's Collection</h2>
         <div className={Style.productItem}>
          {menProductList.map(
            function createmenProducts (menProductsList) {
              return (
                <MenProducts 
                  key={menProductsList.id}
                  id={menProductsList.id}
                  img={menProductsList.img}
                  name={menProductsList.name}
                  price={menProductsList.price}
                />
              )
            }).slice(0, 5)}
         </div>
          
         <Link className={Style.seeMore} to="/men" >SEE MORE</Link>
      </section> 

      <section className={Style.gridItem}>
         <h2 className={Style.heading}>Kid's Collection</h2>
         <div className={Style.productItem}>
          {KidsProductList.map(
            function createkidsProducts (kidsProductsList) {
              return (
                <KidsProducts 
                  key={kidsProductsList.id}
                  img={kidsProductsList.img}
                  name={kidsProductsList.name}
                  price={kidsProductsList.price}
                />
              )
            }).slice(0, 5)}  
         </div>
         <Link className={Style.seeMore} to="/kids" >SEE MORE</Link> 
      </section>
      
    </main>
    
    <footer>
      <Footer />
    </footer>

    </>
  )
}

export default Home