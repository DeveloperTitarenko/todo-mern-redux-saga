const {Schema, model} = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
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