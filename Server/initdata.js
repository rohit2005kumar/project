import connecttodatabase from "./controllers/dbconnection.js"
import Product from "./models/productsmodel.js"
import 'dotenv/config'
const data=[
  {
    name: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with 20 hours battery life.",
    price: 4999,
    category: "Electronics",
    images: [
      {
        public_id: "headphones123",
        url: "https://images.unsplash.com/photo-1580894908361-967195d7c6d6"
      }
    ]
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    description: "High-resolution DSLR camera with 32.5MP sensor and 4K video recording.",
    price: 89999,
    category: "Cameras",
    images: [
      {
        public_id: "canon90d456",
        url: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e"
      }
    ]
  },
  {
    name: "MacBook Air M2",
    description: "Lightweight laptop with Apple M2 chip, 13-inch Retina display.",
    price: 109999,
    category: "Laptops",
    images: [
      {
        public_id: "macbookair789",
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      }
    ]
  },
  {
    name: "Leather Laptop Bag",
    description: "Durable leather bag with padded compartment for laptops up to 15 inches.",
    price: 3499,
    category: "Accessories",
    images: [
      {
        public_id: "laptopbag321",
        url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
      }
    ]
  },
  {
    name: "Organic Dark Chocolate",
    description: "Rich, smooth dark chocolate made with 70% cocoa.",
    price: 299,
    category: "Food",
    images: [
      {
        public_id: "darkchoco654",
        url: "https://images.unsplash.com/photo-1617196037303-5a3a2c8d9f7a"
      }
    ]
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum stand for smartphones and tablets.",
    price: 799,
    category: "Accessories",
    images: [
      {
        public_id: "stand001",
        url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
      }
    ]
  },
  {
    name: "Gaming Laptop ASUS ROG",
    description: "High-performance gaming laptop with RTX 4070 GPU.",
    price: 149999,
    category: "Laptops",
    images: [
      {
        public_id: "asusrog002",
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      }
    ]
  },
  {
    name: "Mirrorless Camera Sony Alpha",
    description: "Compact mirrorless camera with 24.2MP sensor and fast autofocus.",
    price: 75999,
    category: "Cameras",
    images: [
      {
        public_id: "sonyalpha003",
        url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def"
      }
    ]
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life.",
    price: 1299,
    category: "Electronics",
    images: [
      {
        public_id: "mouse004",
        url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
      }
    ]
  },
  {
    name: "Granola Energy Bar",
    description: "Healthy snack bar made with oats, nuts, and honey.",
    price: 99,
    category: "Food",
    images: [
      {
        public_id: "granola005",
        url: "https://images.unsplash.com/photo-1606788075761-1c1c1c1c1c1c"
      }
    ]
  }
]
connecttodatabase()
async function initdata(data) {
   
    await Product.insertMany(data)
    console.log("inserted into db")
} initdata(data)