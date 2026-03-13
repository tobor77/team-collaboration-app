const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const projectRoutes = require("./routes/projectRoutes")
const taskRoutes = require("./routes/taskRoutes")

const errorHandler = require("./middleware/errorMiddleware")

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes)

app.use(errorHandler)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)