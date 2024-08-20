import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Pages/About/About"
import "./app.css"
import Projects from "./Pages/Projects/Projects"
import Skills from "./Pages/Skills/Skills"

function App() {


  return (
    <div className="app">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/Skills" element={<Skills/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
