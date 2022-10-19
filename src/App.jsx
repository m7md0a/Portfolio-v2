import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="pt-20 min-h-screen bg-base-200 bg-opacity-50">
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" >
            <Route path="" element={<Projects/>}/>
            <Route path=":name" element={<Project/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;