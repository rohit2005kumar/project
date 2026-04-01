import express from 'express'
import { fetchproduct, getProductdetails } from '../controllers/products.js'
const router=express.Router()
router.get('/',getProductdetails)
router.post('/category/:category',fetchproduct)
export default router;
