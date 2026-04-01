import express from 'express'
import "dotenv/config.js"
import customer from './router/user.js'
import ProductInfo from "./router/products.js"
import connecttodatabase from './controllers/dbconnection.js'
import cors from "cors"
const app=express()
app.listen(process.env.PORT,()=>{
    console.log(`server is runnig on port ${process.env.PORT}`)
})
// db connection
connecttodatabase()
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("homepage")
})
app.use('/customer',customer)
app.use("/product",ProductInfo)
