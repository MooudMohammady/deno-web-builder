import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Downlaod from "./pages/Download";

function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Editor" element={<Editor />} />
      <Route path="/Downlaod/:filename" element={<Downlaod />} />
    </Routes>
  );
}

export default App;
