import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MenProducts from '../components/product/men/MenProducts'
import menProductsList from '../components/product/men/menProductsList'
import Footer from '../components/footer/Footer'
import Style from './Men.module.css'


function Men() {
  return (
    <>
    <Navbar />
    <div className={Style.ProductList}>
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
            )})
      }
    </div>
    
    <Footer />
    </>
  )
}

export default Men