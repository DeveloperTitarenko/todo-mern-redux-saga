
const express = require('express')
const router = express.Router()

const task = require('../controllers/tasksController')


router.post('/task', task.createTask)
router.delete('/task/:id', task.deleteTask)
router.patch('/task/:id', task.updateTask)
router.get('/task', task.getTasks)

module.exports = router