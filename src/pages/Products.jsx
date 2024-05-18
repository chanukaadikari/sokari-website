import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'

function Products() {

   const{womenProductList} = useContext(ProductsContext)
   const {productsId} = useParams()
   const product = womenProductList.find ( e => e.id === parseInt(productsId) )
   const {name, price} = product

  return (      
    <>
      <div>Products</div>
      <p>{price}</p>
      <p>{name}</p>
    
    </>
  )
}

export default Products