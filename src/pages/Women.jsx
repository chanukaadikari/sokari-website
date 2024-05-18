import React, { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'
import Footer from '../components/footer/Footer'
import Style from './Women.module.css'


function Women() {

  
  return (
    <>
    <Navbar />
    <div className= {Style.ProductList}>
      {womenProductsList.map((womenProductsList) => {   
        return ( 
          <WomenProducts key={womenProductsList.id}
          img={womenProductsList.img}
          name={womenProductsList.name}
          price={womenProductsList.price}
          id={womenProductsList.id}
          />)
      })}  

    </div>
   
    <Footer />   
    </>
  )
}

export default Women
