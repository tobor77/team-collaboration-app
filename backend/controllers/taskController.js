const Task = require("../models/Task")

exports.createTask = async (req, res) => {

  const task = await Task.create({
    ...req.body,
    createdBy: req.user._id
  })

  res.json(task)
}

exports.getTasks = async (req, res) => {

  const page = Number(req.query.page) || 1
  const limit = 10

  const tasks = await Task.find()
    .skip((page - 1) * limit)
    .limit(limit)

  res.json(tasks)
}

exports.updateStatus = async (req, res) => {

  const task = await Task.findById(req.params.id)

  if (task.assignedTo.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not assigned" })
  }

  task.status = req.body.status

  await task.save()

  res.json(task)
}