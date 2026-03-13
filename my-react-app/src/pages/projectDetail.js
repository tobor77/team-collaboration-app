import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../api/axios"
import Navbar from "../components/Navbar"

export default function ProjectDetail(){

  const { id } = useParams()

  const [tasks,setTasks] = useState([])

  useEffect(()=>{

    const fetchTasks = async ()=>{

      const res = await API.get(`/tasks?project=${id}`)

      setTasks(res.data)
    }

    fetchTasks()

  },[id])

  const updateStatus = async (taskId,status)=>{

    await API.put(`/tasks/${taskId}/status`,{
      status
    })

    setTasks(tasks.map(t =>
      t._id === taskId ? {...t,status} : t
    ))
  }

  return (

    <div>

      <Navbar/>

      <h2>Tasks</h2>

      {tasks.map(task => (

        <div key={task._id}>

          <h4>{task.title}</h4>

          <p>{task.status}</p>

          <button onClick={()=>updateStatus(task._id,"Todo")}>
            Todo
          </button>

          <button onClick={()=>updateStatus(task._id,"In Progress")}>
            In Progress
          </button>

          <button onClick={()=>updateStatus(task._id,"Done")}>
            Done
          </button>

        </div>

      ))}

    </div>
  )
}