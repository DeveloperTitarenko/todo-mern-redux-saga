const Task = require('../models/Task')

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

const createTask = async (req, res) => {
  try {
    const {title, text, author, type, finished, takeUp} = req.body
    const task = new Task({
      title,
      text,
      author,
      type,
      finished,
      takeUp
    })
    await task.save()
    res.status(200).send({task})
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

const updateTask = async (req, res) => {

  const {id} = req.params
  const updateTask = {_id: id, ...req.body}
  console.log(updateTask)
  try {
    await Task.findByIdAndUpdate(id, updateTask,{new: true})
    res.status(200).send(updateTask)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}
const deleteTask = async (req, res) => {
  const {id} = req.params
  try {
    await Task.findByIdAndDelete(id)
    res.json({message: "Post deleted successfully."})
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
}