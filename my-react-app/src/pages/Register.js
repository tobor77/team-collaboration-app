import { useState } from "react"
import API from "../api/axios"
import { useNavigate } from "react-router-dom"

export default function Register() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    await API.post("/auth/register",{
      name,
      email,
      password
    })

    navigate("/login")
  }

  return (

    <form onSubmit={handleSubmit}>

      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button type="submit">
        Register
      </button>

    </form>
  )
}