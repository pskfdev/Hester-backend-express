const express = require('express')
const router = express.Router()

/* Controller */
const { listUser, readUser, updateName, deleteUser, changePassword, changeRole } = require('../controllers/user')
/* Middleware */
const { userCheck, adminCheck } = require('../middleware/authCheck')

/* For admin */
router.get('/user', userCheck, adminCheck, listUser)
router.get('/user/:id', userCheck, adminCheck, readUser)
router.put('/change-role/:id', userCheck, adminCheck, changeRole)
router.delete('/user/:id', userCheck, adminCheck, deleteUser)

/* For user */
router.put('/user/:id', userCheck, updateName)
router.put('/change-password/:id', userCheck, changePassword)




module.exports = router