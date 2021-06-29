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
      takeUp,
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
  try {
    await Task.findByIdAndUpdate(id, updateTask, {new: true})
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

const updateTasksMany = async (req, res) => {
  const {performer, newPerformer, performerLogo} = req.body
  try {
    await Task.updateMany({author: performer}, {author: newPerformer})
    await Task.updateMany({performer: performer}, {performer: newPerformer, performerLogo: performerLogo})
    const tasks = await Task.find()
    res.status(200).send(tasks)
  } catch (err) {
    res.status(404).send({message: err})
  }

}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTasksMany
}