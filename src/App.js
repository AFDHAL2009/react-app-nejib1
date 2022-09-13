import "./App.css"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import NotMatch from "./components/NotMatch"
import SideBar from "./components/SideBar"
import Login from "./components/Login"
import Register from "./components/Register"
import Station from "./components/Station"
import { HashRouter,Route, Routes } from "react-router-dom"

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/menu" element={<SideBar />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/Station" element={<Station />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
 
  )
}

export default App
