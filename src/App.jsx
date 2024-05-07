import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import AboutUs from './pages/AboutUs';
import Policy from './pages/Policy';
import Cart from './pages/Cart';
import LogInSignUp from './pages/Login';

function App () {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/women' element={<Women />} /> 
      <Route path='/men' element={<Men />} />
      <Route path='/kids' element={<Kids />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/LoginSignup' element={<LogInSignUp />} />
    </Routes>

    
  )
  
}

export default App;