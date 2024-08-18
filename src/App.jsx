import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Pages/About/About"
import "./app.css"
import Projects from "./Pages/Projects/Projects"
import Experience from "./Pages/Experience/Experience"

function App() {


  return (
    <div className="app">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/experience" element={<Experience/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
