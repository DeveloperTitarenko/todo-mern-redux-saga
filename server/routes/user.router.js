const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')




router.get('/user/:email', user.getUser)
router.post('/user/:id', user.updateUser)


module.exports = router