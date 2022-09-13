import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import { MdPerson } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"
const SideBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: "darkcyan", width: "20px", height: "20px" }}
          />
        ) : (
          <FiMenu
            style={{ color: "darkcyan", width: "20px", height: "20px" }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              {" "}
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default SideBar
