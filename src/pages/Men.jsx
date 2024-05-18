import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MenProducts from '../components/product/men/MenProducts'
import menProductsList from '../components/product/men/menProductsList'
import Footer from '../components/footer/Footer'





function Men() {
  return (
    <>
    <Navbar />
    {menProductsList.map( function createMenProducts (menProductList) {
   
   return (
            <>
              <MenProducts 
                key={menProductList.id}
                id ={menProductList.id}
                img={menProductList.img}
                name={menProductList.name}
                price={menProductList.price} />
            </>
          ) }

    )}
    <Footer />
    </>
  )
}

export default Men