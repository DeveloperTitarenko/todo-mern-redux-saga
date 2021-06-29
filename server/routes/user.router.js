const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')




router.get('/user/:email', user.getUser)
router.get('/users', user.getUsers)
router.patch('/user/:id', user.updateUser)
router.patch('/password/:id', user.updatePassword)


module.exports = router