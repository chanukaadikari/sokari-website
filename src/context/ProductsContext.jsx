import React, { createContext } from 'react'
import womenProductList from '../components/product/women/womenProductsList'
import menProductList from '../components/product/men/menProductsList'
import kidsProductList from '../components/product/kids/kidsProductsList'

export const ProductsContext = createContext(null)

const ProductsContextProvider = (props) => {

    const contextValue = {womenProductList,
                          menProductList,
                          kidsProductList}

    return (
     
         <ProductsContext.Provider value={contextValue}> 
            {props.children}
         </ProductsContext.Provider>
 
    )
}

export default ProductsContextProvider;