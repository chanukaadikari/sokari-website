import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MenProducts from '../components/product/men/MenProducts'
import menProductsList from '../components/product/men/menProductsList'
import Footer from '../components/footer/Footer'

function createMenProducts (menProductList) {
   
  return (
    <>
      <MenProducts 
        key={menProductList.id}
        img={menProductList.img}
        name={menProductList.name}
        price={menProductList.price} />
    </>
  ) 

}

function Men() {
  return (
    <>
    <Navbar />
    {menProductsList.map(createMenProducts)}
    <Footer />
    </>
  )
}

export default Men