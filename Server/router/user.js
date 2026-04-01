import express from 'express'
import { loginuser, registeruser } from '../controllers/usercontrollers.js'
import { checkuserislogin } from '../middleware/checkIsuserAuthorized.js'
const router=express.Router()
router.post('/register',registeruser)
router.post('/login',checkuserislogin,loginuser)
export default router;