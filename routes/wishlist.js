const express = require('express')
const router = express.Router()

/* Controller */
const { addWishlist, listWishlist, removeWishlist } = require('../controllers/wishlist')
/* Middleware */
const { userCheck } = require('../middleware/authCheck')


router.post('/wishlist', userCheck, addWishlist)
router.get('/wishlist', userCheck, listWishlist)
router.delete('/wishlist', userCheck, removeWishlist)



module.exports = router
