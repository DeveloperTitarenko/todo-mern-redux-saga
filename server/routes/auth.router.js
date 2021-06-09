const express = require('express')
const router = express.Router()


const user = require('../controllers/userController')

router.post('/registration', user.registration)
router.post('/login', user.logIn)


module.exports = router