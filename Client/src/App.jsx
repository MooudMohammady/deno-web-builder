import { Route, Routes } from "react-router-dom"
import Editor from "./pages/Editor"

function App() {
  return (
    <Routes>
      <Route path="/Editor" element={<Editor/>}/>
    </Routes>
  )
}

export default App
