const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  author: {
    type: String,
  },
  type: {
    type: String,
  },
  finished: {
    type: Boolean
  },
  performer: {
    type: String
  },
  takeUp: {
    type: Boolean
  }
})

module.exports = model('Task', TaskSchema)