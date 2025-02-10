import React from "react";
import { NavBar } from "./NavBar";
import { Route, Routes, useLocation} from "react-router-dom";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Project } from "./Project";
import { Experience } from "./Experience";

function App() {
  const location = useLocation();

  return (
    <div
      className={`grid grid-cols-1 md:grid md:grid-cols-2 place-items-center ${
        location.pathname === "/home" || "/project" ? "md:overflow-hidden overflow-auto" : "overflow-auto"
      }`}
    >
      <NavBar />
      <div className="w-screen h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<div className="h-full overflow-auto"><Experience /></div>}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
