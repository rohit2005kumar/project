import React from "react";
import { useEcommercedata } from "../context/ContextApi";

const Shop = ({ products }) => {
    const {setCartItems}=useEcommercedata()
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Shop Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <p className="text-lg font-bold text-indigo-600 mt-3">
              ₹{product.price}
            </p>
            <div 
            onClick={()=>{setCartItems((prev)=>([...prev,p]))}}
             className="bg-blue-500 p-4 rounded-2xl text-center text-white">Add to cart</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;