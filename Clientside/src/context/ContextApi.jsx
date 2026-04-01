import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const EcommerceContext = createContext();
export const EcommerceProvider = ({ children }) => {
    const [productDetails, setProductDetails] = useState([])
    const [category,setCategory]=useState({})
    const[cartItems,setCartItems]=useState([])
    const [total,settotal]=useState(0)
    const[quantity,setquantity]=useState(1);
    const getdata = async () => {
        const response = await axios.get("http://localhost:8080/product")
        // console.log(response)
        // if (response.data.length > 0) {
            setProductDetails(response.data)
            const grouped = response.data.reduce((acc, product) => {
                if (!acc[product.category]) {
                    acc[product.category] = [];
                }
                acc[product.category].push(product);
                return acc;
            }, {});
            setCategory(grouped);
            // console.log(grouped)
        // }
        

    }
    const addtocart=(data)=>{
        setCartItems((prev)=>{
           const exist=prev.find((item)=>(item._id===data._id))
           if(exist){
            
           }
                
        })
    }
    const removeitem=(id)=>{
        setCartItems(cartItems.filter(item => item._id !== id))
    }
    const totalcartvalue=()=>{
      settotal( cartItems.reduce((acc,item)=>(acc+item.price)))
    }
    useEffect(() => {
        getdata()
        // console.log(productDetails)
    }, [])


    return <EcommerceContext.Provider value={{productDetails,category,cartItems,setCartItems,addtocart,removeitem,total,settotal,quantity}}>
        {children}
    </EcommerceContext.Provider>
}
export const useEcommercedata = () => {
    return useContext(EcommerceContext)
}