

import React from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link,useNavigate } from "react-router";
import { useCart } from "../context/CartContext"; // 

function Navbar() {
  const { cartCount } = useCart(); //  Pulls data straight from main.jsx provider
   const navigate= useNavigate();
           const handleLogout = () => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
           }; 
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
 
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Shopping-mart
        </Link>
 
        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="font-medium text-gray-700 transition hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="font-medium text-gray-700 transition hover:text-blue-600">
            Products
          </Link>
          <Link to="/wishlist" className="font-medium text-gray-700 transition hover:text-blue-600">
            Wishlist
          </Link>
          <Link to="/checkout" className="font-medium text-gray-700 transition hover:text-blue-600">
            Checkout
          </Link>
        </nav>
 
        {/* Right Section */}
        <div className="flex items-center gap-4">
 
          {/* Search */}
          <button className="text-gray-600 transition hover:text-blue-600" aria-label="Search">
            <Search size={21} />
          </button>
 
          {/* Cart */}
          <Link to="/cart" className="relative text-gray-600 transition hover:text-blue-600" aria-label="Shopping cart">
            <ShoppingCart size={21} />
 
            {/*  FIXED: Badge only renders if items exist in the global context */}
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
 
          {/* User */}
          <Link to="/login" className="text-gray-600 transition hover:text-blue-600" aria-label="User account">
            <User size={21} />
          </Link>
 
          {/* Mobile Menu */}
          <button className="text-gray-600 md:hidden" aria-label="Open menu">
            <Menu size={24} />
          </button>
        
           <button onClick={handleLogout}
           className="text-red-600 hover:text-red-700"
           >
            Logout

           </button>
        </div>
      </div>
    </header>
  );
}
 
export default Navbar;