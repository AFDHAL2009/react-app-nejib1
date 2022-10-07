import React from "react"
//import logo from "../logo.svg"
import logo from "../assets/images/mern.png"
import "../styles/Banner.css"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../stores/users"
const Header = ({ childToParent }) => {
  const data = "This is data from Child Component to the Parent Component."
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { isSuccessLogin } = useSelector((state) => state.root.users)

  return (
    <header>
      <nav className="topnav">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <a href="" onClick={() => navigate("/home")}>
          HOME
        </a>
        <a href="" onClick={() => navigate("/about")}>
         ABOUT ME
        </a>
        <a href="" onClick={() => navigate("/projects")}>
          MY PROJECTS
        </a>

        <a href="" onClick={() => navigate("/works")}>
        WORK EXAMPLES
        </a>

      </nav>
    </header>
  )
}
export default Header
