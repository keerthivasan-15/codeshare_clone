import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import EditorTemplate from "./pages/EditorTemplate"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<EditorTemplate/>}/>
    </Routes>
    </>
  )
}

export default App
