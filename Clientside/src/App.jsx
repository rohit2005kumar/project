
import { Route,Routes } from 'react-router-dom'

import HomePage from './component/Homepage'
import CategorisedProduct from './component/CategorisedProduct'
import { useEcommercedata } from './context/ContextApi'
import Cart from './component/Cart'
import Login from './component/Login'
import Signup from './component/Signup'
import ContactPage from './component/ContactPage'
import { ToastContainer } from 'react-toastify'
import Shop from './component/Shop'
import CheckoOutPage from './component/CheckOutPage'


function App() {
  const{category,cartItems,productDetails}=useEcommercedata()
  console.log(cartItems)
  

  return <>
  <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/cart' element={<Cart cartItems={cartItems} />}/>
   <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
     <Route path="/shop" element={<Shop products={productDetails}/>}/>
     <Route path="/checkout" element={<CheckoOutPage cartItems={cartItems}/>}/>
     <Route path="/contact" element={<ContactPage/>}/>
    

   <Route path="/categroyproduct" element={<CategorisedProduct category={category} />}/>
  </Routes>
  <ToastContainer/>
  
   
  
  </>
 
}

export default App
