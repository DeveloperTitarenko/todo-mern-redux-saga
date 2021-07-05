const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()
const authRouter = require('./routes/auth.router')
const taskRouter = require('./routes/tasks.router')
const userRouter = require('./routes/user.router')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello todo app')
})

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.json({extended: true}))
app.use(cors())
app.use(authRouter)
app.use(taskRouter)
app.use(userRouter)

async function start() {
  try{
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.vggtl.mongodb.net/todo-mern?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  }catch (err){
    console.log(err)
  }
}

start().then(() => console.log('server start'))

