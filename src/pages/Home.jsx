import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from "react-router-dom"
import WomenProducts from '../components/product/women/WomenProducts'
import womenProductsList from '../components/product/women/womenProductsList'
import MenProducts from '../components/product/men/MenProducts'
import menProductList from '../components/product/men/menProductsList'
import KidsProducts from '../components/product/kids/KidsProducts'
import KidsProductList from '../components/product/kids/kidsProductsList'
import Footer from '../components/about/Footer'


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

function createmenProducts (menProductsList) {
  return (
    <MenProducts 
      key={menProductsList.id}
      img={menProductsList.img}
      name={menProductsList.name}
      price={menProductsList.price}
    />
  )
}

function createkidsProducts (kidsProductsList) {
  return (
    <KidsProducts 
      key={kidsProductsList.id}
      img={kidsProductsList.img}
      name={kidsProductsList.name}
      price={kidsProductsList.price}
    />
  )
}

function Home() {
  return (
    <>
    <Navbar />
   
    <div>
      <h2>Women's Products</h2>
      {womenProductsList.map(createWomenProducts).slice(0, 4)}
      <Link to="/women" >SEE MORE</Link>
    </div>

    <div>
      <h2>Men's Products</h2>
      {menProductList.map(createmenProducts).slice(0, 4)}
      <Link to="/men" >SEE MORE</Link>
    </div>

    <div>
      <h2>Kid's Products</h2>
      {KidsProductList.map(createkidsProducts)}
      <Link to="/kids" >SEE MORE</Link> 
    </div>
    
    <Footer />

    </>
  )
}

export default Home