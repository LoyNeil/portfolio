import React from "react";
import { NavBar } from "./NavBar";
import { Route, Routes, useLocation} from "react-router-dom";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Project } from "./Project";
import { Experience } from "./Experience";
import { ChatBot } from "./ChatBot";
import { CrmEnhancement } from "./CrmEnhancement";
import { Escalation } from "./Escalation";

function App() {
  const location = useLocation();

  return (
    <div
      className={`grid grid-cols-1 md:grid md:grid-cols-2 place-items-center ${
        location.pathname === "/home" || location.pathname === "/project" || location.pathname === "/project/chatbot" || location.pathname === "/project/crm" ? "md:overflow-hidden overflow-auto" : "overflow-auto"
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
          <Route path="/project/chatbot" element={<ChatBot />} />
          <Route path="/project/crm" element={<CrmEnhancement />} />
          <Route path="/project/escalation" element={<Escalation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
