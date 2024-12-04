const express = require('express')
const router = express.Router()

/* Controller */
const { createProduct, listProduct, readProduct, updateProduct, deleteProduct } = require('../controllers/product')

/* Middleware */
const { upload } = require('../middleware/uploadfile')
/* const { authCheck, adminCheck } = require('../middleware/authCheck') */


router.post('/product', upload, createProduct)
router.get('/product', listProduct)
router.get('/product/:id', readProduct)
router.put('/product/:id', upload, updateProduct)
router.delete('/product/:id', deleteProduct)



module.exports = router