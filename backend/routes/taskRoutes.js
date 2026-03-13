const router = require("express").Router()

const protect = require("../middleware/authMiddleware")
const adminOnly = require("../middleware/roleMiddleware")

const {
  createTask,
  getTasks,
  updateStatus
} = require("../controllers/taskController")

router.get("/", protect, getTasks)

router.post("/", protect, adminOnly, createTask)

router.put("/:id/status", protect, updateStatus)

module.exports = router