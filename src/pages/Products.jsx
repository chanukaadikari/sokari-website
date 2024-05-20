import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'
import Style from './Products.module.css'
import Navbar from '../components/navbar/Navbar'   
import Footer from '../components/footer/Footer'
import womenProductsList from '../components/product/women/womenProductsList'
import WomenProducts from '../components/product/women/WomenProducts'


function Products() {

   const{womenProductList} = useContext(ProductsContext)
   const {productsId} = useParams()
   const product = womenProductList.find ( e => e.id === parseInt(productsId) )
   const {name, price, img, description} = product

  return (      
    <>
      <Navbar />
      <div className={Style.productsDisplay}>
        <div className={Style.productsDisplayLeft}>
          <div className={Style.productsDisplaytImgList}>
            <img className={Style.productsImg} src={img} alt="" />
            <img className={Style.productsImg} src={img} alt="" />
            <img className={Style.productsImg} src={img} alt="" />
            <img className={Style.productsImg} src={img} alt="" />
          </div>
          <div className={Style.productDisplayImg}>
            <img className={Style.productsDisplayMain} src={img} alt="" />
          </div>
        </div>
        <div className={Style.productsDisplayRight}>
          <h1 className={Style.productName}>{name}</h1>
          <h2 className={Style.productNewPrice}>{price}</h2>
          <p className={Style.productsDescription}>{description}</p>
          <h2 className={Style.sizeHeader}>Size</h2>
          <ul className={Style.productSizesList}>
            <li><button  className={Style.productSizes}>XS</button></li>
            <li><button  className={Style.productSizes}>S</button></li>
            <li><button  className={Style.productSizes}>M</button></li>
            <li><button  className={Style.productSizes}>L</button></li>
            <li><button  className={Style.productSizes}>XL</button></li>
            <li><button  className={Style.productSizes}>XXL</button></li>
          </ul>
          <div className={Style.addToCartContainer}>
              <button className={Style.minusBtn} >-</button>
              <p className={Style.productQuantityDisplay}>0</p>
              <button className={Style.plusBtn}>+</button>
              <button className={Style.addToCartBtn}>Add to cart</button>
              <span className="material-symbols-outlined">favorite</span>
          </div>
        </div>
      </div>
      <div>
        <div >
          <h2>Recommended Products</h2>
          <div className={Style.otherWomenProductContainer}>
                {womenProductsList.map((womenProductsList) => {   
                return ( 
                  <WomenProducts key={womenProductsList.id}
                  img={womenProductsList.img}
                  name={womenProductsList.name}
                  price={womenProductsList.price}
                  id={womenProductsList.id}
                  />)
              }).slice(1,7)}  
          </div>
          
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Products