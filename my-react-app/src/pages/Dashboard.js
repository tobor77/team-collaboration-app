import { useEffect, useState } from "react"
import API from "../api/axios"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Dashboard(){

  const [projects,setProjects] = useState([])

  useEffect(()=>{

    const fetchProjects = async ()=>{

      const res = await API.get("/projects")

      setProjects(res.data)
    }

    fetchProjects()

  },[])

  return (

    <div>

      <Navbar/>

      <h2>Projects</h2>

      {projects.map(project => (

        <div key={project._id}>

          <Link to={`/project/${project._id}`}>
            {project.name}
          </Link>

        </div>

      ))}

    </div>

  )
}