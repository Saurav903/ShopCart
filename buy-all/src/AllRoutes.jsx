import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import SinglePage from './Pages/SinglePage';
function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products/:id" element={<SinglePage/>}></Route>
        </Routes>
    </>
  )
}

export default AllRoutes