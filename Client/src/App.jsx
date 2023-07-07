import { Route, Routes } from "react-router-dom"
import Editor from "./pages/Editor"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Editor" element={<Editor/>}/>
    </Routes>
  )
}

export default App
