const User = require('../models/User')

const bcryptjs = require('bcryptjs')

const registration = async (req, res) => {

  try {
    const {email, password, username} = req.body
    const isUser = await User.findOne({email})
    if (isUser) {
      return res.status(300).json({message: 'Данный email уже зарегистрирован'})
    }
    const hashPassword = await bcryptjs.hash(password, 12)

    const user = new User({
      username,
      email,
      password: hashPassword
    })
    await user.save()

    res.status(200).send({token: user.generateJWT(user)})
  } catch (err) {
    console.log(err)
  }
}

const logIn = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
      return res.status(400).json({message: 'Такого email нет в базе'})
    }
    const isLogin = await bcryptjs.compare(password, user.password)
    if (isLogin) {
      res.status(200).send({
        token: user.generateJWT(user),
        username: user.username,
        email: user.email,
        id: user.id
      })
    } else {
      return res.status(300).send({message: 'Пароли не совпадают'});
    }
  } catch (err) {
    console.log(err)
  }
}




module.exports = {
  registration,
  logIn,
}