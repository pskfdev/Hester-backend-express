const express = require('express')
const router = express.Router()

/* Controller */
const { createCategory, listCategory, readCategory, updateCategory, deleteCategory } = require('../controllers/category')
/* Middleware */
/* const { authCheck, adminCheck } = require('../middleware/authCheck') */


router.post('/category', createCategory)
router.get('/category', listCategory)
router.get('/category/:id', readCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)



module.exports = router