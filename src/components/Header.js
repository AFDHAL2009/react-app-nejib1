import React from "react"
import logo from "../logo.svg"
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
          Home
        </a>
        <a href="" onClick={() => navigate("/station")}>
          Station
        </a>
        <a href="" onClick={() => navigate("/about")}>
          About
        </a>
        {isSuccessLogin == false ? (
          <a className="auth" href="" onClick={() => navigate("/login")}>
            SignIn
          </a>
        ) : (
          <a href="" onClick={() => dispatch(logout())}>
            LogOut
          </a>
        )}
        {isSuccessLogin == false ? (
          <a href="" onClick={() => navigate("/register")}>
            SignUp
          </a>
        ) : null}
      </nav>
    </header>
  )
}
export default Header
