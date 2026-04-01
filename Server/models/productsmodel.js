import  mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    min: [0, 'Price must be a positive number']
  },
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: {
      values: ['Electronics', 'Cameras', 'Laptops', 'Accessories', 'Food'],
      message: 'Please select correct category'
    }
  },
//   brand: {
//     type: String,
//     required: [true, 'Please enter product brand']
//   },
//   stock: {
//     type: Number,
//     required: [true, 'Please enter product stock'],
//     default: 0
//   },
//   ratings: {
//     type: Number,
//     default: 0
//   },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
});

const Product=mongoose.model('Product', productSchema);
export default Product;