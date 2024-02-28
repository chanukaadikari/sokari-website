import React from 'react'
import Navbar from '../components/navbar/Navbar'
import KidsProductList from '../components/product/kids/kidsProductsList'
import KidsProducts from '../components/product/kids/KidsProducts'
import Footer from '../components/about/Footer'

function createKidsProduct (KidsProductList) {
  return <>
    <KidsProducts 
      key={KidsProductList.id}
      img={KidsProductList.img} 
      name={KidsProductList.name}
      price={KidsProductList.price}
    />
  </>
}

function Kids() {
  return ( <>
   <Navbar />
   {KidsProductList.map(createKidsProduct)}
   <Footer />
  </>
  )
}

export default Kids