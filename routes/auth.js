const express = require('express')
const router = express.Router()

/* Controller */
const { register, login } = require('../controllers/auth')
/* Middleware */
const { userCheck, adminCheck } = require('../middleware/authCheck')


router.post('/register', register)
router.post('/login', login)
router.post('/current-user', userCheck, currentUser)
router.post('/current-admin', adminCheck, currentAdmin)



module.exports = router