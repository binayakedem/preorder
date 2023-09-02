import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Item from '../Pages/Item'
import Footer from './Footer'
import Links from './Links'
import Navbar from './Navbar'
import Authentication from './Authentication'
import Order from '../Pages/Order'



const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Links/>
        
        <Routes>
             <Route path='/' element={<Authentication/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='item' element={<Item/>}/>
            <Route path='order' element={<Order/>}/>
        </Routes>
        <About/>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Layout