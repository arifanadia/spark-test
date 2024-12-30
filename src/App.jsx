import React from "react";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/Vertical";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Horizontal Component */}
      <div className="horizontal-section">
        <Horizontal />
      </div>
      
      {/* Vertical Component - auto scroll works as normal */}
      <div className="vertical-section">
        <Vertical />
      </div>
    </div>
  );
};

export default App;
