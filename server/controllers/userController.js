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

    res.status(200).send({
      token: user.generateJWT(user),
      email: email
    })
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

const updateUser = async (req, res) => {
  const {id} = req.params
  try {
    const updateUser = {...req.body}
    await User.findByIdAndUpdate(id, updateUser, {new: true})
    const newUser = await User.find({_id: id})
    res.status(200).send(newUser)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}
const getUsers = async (req, res) => {
  try{
    const users = await User.find()
    res.status(200).json(users)
  }catch (err){
    console.log(err)
  }
}

const getUser = async (req, res) => {
  const {email} = req.params
  try {
    const userData = await User.find({email: email})
    res.status(200).send(userData)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

const updatePassword = async (req, res) => {
  const {id} = req.params
  const {password, newPassword} = req.body
  try {
    const user = await User.findOne({_id: id})
    const isLogin = await bcryptjs.compare(password, user.password)
    if (isLogin) {
      const hashPassword = await bcryptjs.hash(newPassword, 12)
      const newUser = await User.findByIdAndUpdate({_id: id}, {password: hashPassword}, {new: true})
      res.status(200).send(newUser)
    }else{
      res.status(404).json({message: 'Пароль введен неверно'})
    }

  } catch (err) {
    res.status(404).json({message: err.message})
  }
}


module.exports = {
  registration,
  logIn,
  updateUser,
  getUser,
  getUsers,
  updatePassword
}