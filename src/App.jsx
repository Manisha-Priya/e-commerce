import React from 'react';
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  

  return (
    
      <Routes>
          <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>

        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
      
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        </Route>
      </Routes>
    
 
      
  );
}
 
export default App;