import { React, useEffect, useState } from "react"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import "../styles/Login.css"
import "../styles/Register.css"
import image from "../assets/images/dev.jfif"

const Works = () => {
  const [data, setData] = useState("")
  const childToParent = (childdata) => {
    setData(childdata)
  }

  return (
    <div style={{ flexDirection: "column" }}>
      <div>
        {" "}
        <Header childToParent={childToParent} />
      </div>

      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <span>Works page</span>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default Works
