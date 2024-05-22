import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'
import Style from './Products.module.css'
import Navbar from '../components/navbar/Navbar'   
import Footer from '../components/footer/Footer'
import recommendedProducts from '../utils/recommendedProducts'


function Products() {

  const{womenProductList,menProductList,kidsProductList} = useContext(ProductsContext)
  const {productsId} = useParams()
  const product = womenProductList.find ( e => e.id === parseInt(productsId)) || 
                   menProductList.find ( e => e.id === parseInt(productsId)) ||
                   kidsProductList.find ( e => e.id === parseInt(productsId)) 
  const {name, price, img: { img01,img02,img03,img04,img05 } , description, img} = product
  
  return (      
    <>
      <Navbar />
      <div className={Style.productsDisplay}>
        <div className={Style.productsDisplayLeft}>
          <div className={Style.productsDisplaytImgList}>
            <img className={Style.productsImg} src={img02} alt="" />
            <img className={Style.productsImg} src={img03} alt="" />
            <img className={Style.productsImg} src={img04} alt="" />
            <img className={Style.productsImg} src={img05} alt="" />
          </div>
          <div className={Style.productDisplayImg}>
            <img className={Style.productsDisplayMain} src={img01} alt="" />
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
          <h2 className={Style.recomendedProductsHeader}>Recommended Products</h2>

          <div>
            {recommendedProducts()}
          </div>

     {/*     <div className={Style.otherWomenProductContainer}>
              {
              womenProductsList.map((womenProductsList) => {
                return ( 
                  <WomenProducts key={womenProductsList.id}
                  img={womenProductsList.img}
                  name={womenProductsList.name}
                  price={womenProductsList.price}
                  id={womenProductsList.id}
                  />)
              }).slice(1,7)}  
            </div> */}

          <div>
            
            
            
          </div>
          
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Products