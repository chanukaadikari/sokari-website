import React from 'react'
import Navbar from '../components/navbar/Navbar'
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'


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
       
    </>
  )
}

export default Women
