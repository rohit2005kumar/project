import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const Addcardbtn = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <div className="w-full max-w-50 h-14 flex items-center justify-center select-none">
      {quantity === 0 ? (
        /* Large Touch Target for Mobile */
        <button
          onClick={handleAdd}
          className="w-full h-full flex items-center justify-center gap-3 bg-blue-600 active:bg-blue-800 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95"
        >
          <ShoppingCart size={22} />
          <span>Add to Cart</span>
        </button>
      ) : (
        /* Stepper with Large Plus/Minus Buttons */
        <div className="flex items-center justify-between w-full h-full bg-white border-2 border-blue-600 rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={decrement}
            className="h-full px-4 active:bg-gray-100 text-blue-600 transition-colors"
            aria-label="Decrease"
          >
            <Minus size={24} strokeWidth={3} />
          </button>
          
          <span className="font-black text-xl text-gray-900 tabular-nums">
            {quantity}
          </span>

          <button
            onClick={increment}
            className="h-full px-4 active:bg-gray-100 text-blue-600 transition-colors"
            aria-label="Increase"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Addcardbtn;