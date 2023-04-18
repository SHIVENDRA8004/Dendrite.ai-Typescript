import React from "react";
import Navbar from "./compoents/layouts/Navbar";
import Sidebar from "./compoents/layouts/Sidebar";
import Home from "./compoents/pages/Home";
import MusicGrid from "./compoents/layouts/MusicGrid";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div>
          <Sidebar />
          <Home />
        </div>
        <MusicGrid />
      </div>
    </div>
  );
}

export default App;
