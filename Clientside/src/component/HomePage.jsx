import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import { useEcommercedata } from "../context/ContextApi";

import ProductCard from "./ProductCard";
import { Route } from "lucide-react";
import { Routes, useLocation } from "react-router-dom";

const HomePage = () => {
  const {productDetails,category}=useEcommercedata()
  const location=useLocation
  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-blue-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Big Summer Sale!</h1>
        <p className="text-lg text-gray-600 mt-2">Up to 50% Off</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <Categories categories={category}/>

      {/* Featured Products */}\
    <ProductCard product={productDetails}/>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
     
    </div>
  );
};

export default HomePage;