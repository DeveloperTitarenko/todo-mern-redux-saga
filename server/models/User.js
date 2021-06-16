const {Schema, model} = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  position: {
    type: String
  },
  logo: {
    type: Object
  }
})
UserSchema.methods.generateJWT = function(user) {
  const jwtSecret = 'secret'
  return jwt.sign(
    {userId: user.id},
    jwtSecret,
    {expiresIn: '1h'}
  )
}

module.exports = model('User', UserSchema)