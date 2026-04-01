import React from "react";

const CheckOutPage = ({ cartItems }) => {
  // Calculate total price
  const total = cartItems?.reduce((sum, item) => sum + item.price, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Shipping Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Details</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                placeholder="123 Market Street"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  placeholder="Patna"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  placeholder="800001"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary & Payment */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-700">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No items in cart.</p>
            )}
            <div className="flex justify-between font-semibold text-gray-800 border-t pt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Payment Method */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Payment Method</h3>
          <form className="space-y-4">
            <div className="flex items-center">
              <input type="radio" name="payment" id="card" className="mr-2" />
              <label htmlFor="card" className="text-gray-700">Credit/Debit Card</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="payment" id="cod" className="mr-2" />
              <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 mt-4"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;