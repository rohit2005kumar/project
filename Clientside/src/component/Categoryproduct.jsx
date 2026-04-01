import React from "react";

const Categoryproduct = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      {/* Product Image */}
      <img 
        src={product.images[0].url} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />

      {/* Product Info */}
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>

      {/* Optional description */}
      {product.description && (
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      )}

      {/* Action button */}
     
    </div>
  );
};

export default Categoryproduct;