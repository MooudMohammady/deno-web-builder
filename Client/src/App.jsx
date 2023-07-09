import { Route, Routes } from "react-router-dom"
import Editor from "./pages/Editor"
import Home from "./pages/Home"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Editor" element={<Editor/>}/>
    </Routes>
  )
}

export default App
