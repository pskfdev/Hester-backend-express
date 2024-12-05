const express = require('express')
const router = express.Router()

/* Controller */
const { addCart, listCart, readCart, updateCart, removeCart } = require('../controllers/cart')
/* Middleware */
const { userCheck } = require('../middleware/authCheck')


router.post('/cart', userCheck, addCart)
router.get('/cart', userCheck, listCart)
router.get('/cart/:cartId', userCheck, readCart)
router.put('/cart', userCheck, updateCart)
router.delete('/cart', userCheck, removeCart)



module.exports = router