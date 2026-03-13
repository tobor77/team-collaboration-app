const Project = require("../models/Project")

exports.createProject = async (req, res) => {

  const project = await Project.create({
    ...req.body,
    createdBy: req.user._id
  })

  res.json(project)
}

exports.getProjects = async (req, res) => {

  if (req.user.role === "admin") {

    const projects = await Project.find().populate("members")

    return res.json(projects)
  }

  const projects = await Project.find({
    members: req.user._id
  })

  res.json(projects)
}