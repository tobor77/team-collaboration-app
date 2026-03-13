import { useState, useContext } from "react"
import API from "../api/axios"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await API.post("/auth/login", {
      email,
      password
    })

    login(res.data.token, res.data.role)

    navigate("/")
  }

  return (

    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

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
        Login
      </button>

    </form>
  )
}