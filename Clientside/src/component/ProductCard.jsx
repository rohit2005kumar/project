import React, { useState } from 'react';
import Addcardbtn from './Addcardbtn';
import { useEcommercedata } from '../context/ContextApi';

const ProductCard = ({ product }) => {
  const [startIndex, setStartIndex] = useState(0);
  const{setCartItems}=useEcommercedata()

  // Show only 5 products at a time
  const visibleProducts = product.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 >= product.length) {
      setStartIndex(0); // reset to beginning
    } else {
      setStartIndex(startIndex + 4);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Featured Products</h2>

      {/* Responsive Grid:
          - grid-cols-1: 1 item per row on very small screens
          - sm:grid-cols-2: 2 items per row on small devices
          - md:grid-cols-3: 3 items per row on tablets
          - lg:grid-cols-4: 4 items per row on desktops
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {visibleProducts && visibleProducts.length > 0 ? (
          visibleProducts.map((p) => (
            <div
              key={p._id}
              className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                <img
                  src={p.images?.[0]?.url || 'https://via.placeholder.com/300'}
                  alt={p.name}
                  className="h-full w-full object-contain object-center p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                  {p.category}
                </p>

                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 mb-2 leading-tight">
                  {p.description}
                </h3>

                <div className="mt-auto flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      ${p.price}
                    </span>
                  </div>

                  {/* Full width button on mobile for easier tapping */}
                  {/* <Addcardbtn /> */}
                  <div className='bg-blue-500 text-center text-white text-xl p-2 rounded-2xl'
                  onClick={()=>{setCartItems((prev)=>([...prev,p]))}}
                  >Add to cart</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-400">Loading your collection...</p>
          </div>
        )}
      </div>

      {/* Next button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show Next 4
        </button>
      </div>
    </div>
  );
};

export default ProductCard;