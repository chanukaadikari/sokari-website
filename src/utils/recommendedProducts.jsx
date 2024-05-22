import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'
import womenProductsList from '../components/product/women/womenProductsList'
import WomenProducts from '../components/product/women/WomenProducts'
import MenProducts from '../components/product/men/MenProducts'
import Style from '../pages/Products.module.css'

const recommendedProducts = () => {

    const{womenProductList,menProductList,kidsProductList} = useContext(ProductsContext)
    const {productsId} = useParams()
    const product = womenProductList.find ( e => e.id === parseInt(productsId)) || 
                   menProductList.find ( e => e.id === parseInt(productsId)) ||
                   kidsProductList.find ( e => e.id === parseInt(productsId)) 
 
    if (womenProductList.find ( e => e.id === parseInt(productsId))) {

        return (
            <div className={Style.otherWomenProductContainer}>
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
            </div>)}

    else if ( menProductList.find ( e => e.id === parseInt(productsId))) {

        return (
            <div className={Style.othermenProductContainer}>
                {menProductList.map(( menProductList) => {
                return (
                    <MenProducts key={menProductList.id}
                    img={menProductList.img}
                    name={menProductList.name}
                    price={menProductList.price}
                    id={menProductList.id}/>
                )}).slice(1,7)}
            </div>)}
            
   }

export default recommendedProducts