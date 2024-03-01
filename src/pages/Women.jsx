import React from 'react'
import Navbar from '../components/navbar/Navbar'
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'
import Footer from '../components/footer/Footer'


function createWomenProducts (womenProductsList) {
  return (
    <WomenProducts key={womenProductsList.id}
    img={womenProductsList.img}
    name={womenProductsList.name}
    price={womenProductsList.price}
    />
  )
}

function Women() {
  return (
    <>
    <Navbar />
    {womenProductsList.map(createWomenProducts)}
    <Footer />   
    </>
  )
}

export default Women
