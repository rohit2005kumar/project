import React from "react";
import { useEcommercedata } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems,  }) => {
    const{removeitem,quantity}=useEcommercedata()
    const nav=useNavigate()
    const onCheckout=()=>{
  nav('/checkout')
    }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              {/* Product Image */}
              <img
                src={item.images[0].url}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mb-2 sm:mb-0"
              />

              {/* Product Info */}
              <div className="flex-1 sm:ml-4 text-center sm:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
                <p className="text-gray-500">Qty: {quantity}</p>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button
                  onClick={() => removeitem(item._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Checkout Section */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="text-xl font-bold">
              Total: ₹
              {cartItems.reduce(
                (acc, item) => acc + item.price * quantity,
                0
              )}
            </span>
            <button
              onClick={onCheckout}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


