const express = require('express')
const router = express.Router()
const passport = require('passport')

const user = require('../controllers/userController')

router.post('/registration', user.registration)
router.post('/login', user.logIn)
router.get('/get', passport.authenticate('jwt', {session: false}), user.get)

module.exports = router