import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default AllRoutes