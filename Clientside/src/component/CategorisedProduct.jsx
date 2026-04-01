import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from './ProductCard';
import Categoryproduct from './Categoryproduct';

const CategorisedProduct = ({category}) => {
    const location=useLocation();
    const{categorykey}=location.state || {} ;
    // console.log(categorykey)
    const products=category[categorykey] ||[];
    // console.log(products.length)
     
  return <div className='w-full flex flex-row gap-2'>
  {products.map((item)=>{
    return <Categoryproduct key={item._id} product={item}/>
  })}
  </div>
}

export default CategorisedProduct