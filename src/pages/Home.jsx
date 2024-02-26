import React from 'react'
import Navbar from '../components/navbar/Navbar'
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'


function createWomenProducts (womenProductsList) {
  return (
    <WomenProducts 
    key={womenProductsList.id}
    img={womenProductsList.img}
    name={womenProductsList.name}
    price={womenProductsList.price}
    />
  )
}


function Home() {
  return (
    <>
    <Navbar />
    <h2>Women's Products</h2>
    {womenProductsList.map(createWomenProducts)}
    <h2>Men's Products</h2>
    <h2>Kid's Products</h2>

    </>
  )
}

export default Home