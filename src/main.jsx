import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import ProductsContextProvider from './context/ProductsContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>
      <ProductsContextProvider> 
        <App />  
      </ProductsContextProvider>   
    </BrowserRouter>
  </React.StrictMode>,
)
