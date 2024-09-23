import React, { createContext } from 'react'
import womenProductList from '../components/product/women/womenProductsList'
import menProductList from '../components/product/men/menProductsList'


export const ProductsContext = createContext(null)

const ProductsContextProvider = (props) => {

    const contextValue = {womenProductList,
                          menProductList,
                        }

    return (
     
         <ProductsContext.Provider value={contextValue}> 
            {props.children}
         </ProductsContext.Provider>
 
    )
}

export default ProductsContextProvider;