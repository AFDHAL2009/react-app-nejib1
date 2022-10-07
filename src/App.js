import "./App.css"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import NotMatch from "./components/NotMatch"
import SideBar from "./components/SideBar"
import Projects from "./components/Projects"
import Works from "./components/Works"
import { HashRouter,Route, Routes } from "react-router-dom"

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/menu" element={<SideBar />} />
      <Route exact path="/works" element={<Works />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
 
  )
}

export default App
