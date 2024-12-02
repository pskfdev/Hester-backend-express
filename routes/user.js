const express = require('express')
const router = express.Router()

/* Controller */
const { listUser, readUser, deleteUser } = require('../controllers/user')
/* Middleware */
/* const { authCheck, adminCheck } = require('../middleware/authCheck') */


router.get('/user', listUser)
router.get('/user/:id', readUser)
router.delete('/user/:id', deleteUser)



module.exports = router