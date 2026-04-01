import Product from "../models/productsmodel.js";
export const fetchproduct=async(req,res)=>{
    try {
        const {category}=req.params;
        // console.log(cateogry)
    const productinfo=await Product.find({category});
    if(!productinfo)return res.status(400).json({message:"product not available"})
        res.status(200).json(productinfo)
        
    } catch (error) {
        res.send(error.message)
        
    }
}
export const getProductdetails=async(req,res)=>{
    try {
        const productinfo=await Product.find({});
        if(!productinfo) return res.status(400).json({message:"No product found"})
        res.status(200).send(productinfo)
        
    } catch (error) {
       return res.send(error.message)
    }

}