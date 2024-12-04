const express = require('express')
const router = express.Router()

/* Controller */
const { listUser, readUser, updateName, deleteUser, changePassword, changeRole } = require('../controllers/user')
/* Middleware */
const { userCheck, adminCheck } = require('../middleware/authCheck')


router.get('/user', userCheck, adminCheck, listUser)
router.get('/user/:id', userCheck, adminCheck, readUser)
router.put('/user/:id', userCheck, adminCheck, updateName)
router.delete('/user/:id', userCheck, adminCheck, deleteUser)

router.put('/change-password/:id', userCheck, adminCheck, changePassword)
router.put('/change-role/:id', userCheck, adminCheck, changeRole)



module.exports = router