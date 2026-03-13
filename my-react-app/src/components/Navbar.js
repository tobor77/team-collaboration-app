import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export default function Navbar() {

  const { logout } = useContext(AuthContext)

  return (
    <nav>

      <Link to="/">Dashboard</Link>

      <button onClick={logout}>
        Logout
      </button>

    </nav>
  )
}