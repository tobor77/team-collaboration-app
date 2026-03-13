const router = require("express").Router()

const protect = require("../middleware/authMiddleware")
const adminOnly = require("../middleware/roleMiddleware")

const {
  createProject,
  getProjects
} = require("../controllers/projectController")

router.get("/", protect, getProjects)

router.post("/", protect, adminOnly, createProject)

module.exports = router