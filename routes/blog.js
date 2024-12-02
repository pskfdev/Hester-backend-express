const express = require('express')
const router = express.Router()

/* Controller */
const { createBlog, listBlog, readBlog, updateBlog, deleteBlog } = require('../controllers/blog')
/* Middleware */
/* const { authCheck, adminCheck } = require('../middleware/authCheck') */


router.post('/blog', createBlog)
router.get('/blog', listBlog)
router.get('/blog/:id', readBlog)
router.put('/blog/:id', updateBlog)
router.delete('/blog/:id', deleteBlog)



module.exports = router