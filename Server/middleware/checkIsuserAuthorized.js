import jwt from 'jsonwebtoken'
export const checkuserislogin=async (req,res,next) => {
const bearerToken=req.headers["authorization"];
if(!bearerToken) return res.status(400).json({message:"token not provided"})
try {
    const token=bearerToken.split(' ')[1];
const tokeninfo=jwt.verify(token,process.env.SECRET);
req.user=tokeninfo;
console.log(tokeninfo)

    next()
    
} catch (error) {
    res.send(error.message)
    
}
}