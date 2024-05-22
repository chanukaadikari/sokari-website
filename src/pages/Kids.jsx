import React from 'react'
import Navbar from '../components/navbar/Navbar'
import KidsProductList from '../components/product/kids/kidsProductsList'
import KidsProducts from '../components/product/kids/KidsProducts'
import Footer from '../components/footer/Footer'
import kidsProductList from '../components/product/kids/kidsProductsList'
import Style from './Kids.module.css'

function Kids() {
  return ( <>
   <Navbar />

   <div className={Style.ProductList}>

    {KidsProductList.map(function createKidsProduct (KidsProductList) {
    
    return <>
      <KidsProducts 
        key={kidsProductList.id}
        id={kidsProductList.id}
        img={KidsProductList.img} 
        name={KidsProductList.name}
        price={KidsProductList.price}
      />
    </>
    })}

   </div>
   
   <Footer />
  </>
  )
}

export default Kids