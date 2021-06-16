const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')




router.get('/user/:email', user.getUser)
router.patch('/user/:id', user.updateUser)


module.exports = router