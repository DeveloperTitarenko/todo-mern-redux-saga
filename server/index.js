const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')

const app = express()
const userRouter = require('./routes/auth.router')

const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use(cors())
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

