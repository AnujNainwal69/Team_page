import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TeamPage from "./TeamPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (<div>
    <header  ><Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /></header>
       <div className="flex"> 
      <Sidebar isOpen={isSidebarOpen} />
      
        
          <TeamPage />
        </div>
    </div>

  );
}

export default App;
