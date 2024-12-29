import React from "react";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/vertical";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
     <Horizontal />
     <Vertical />
    </div>
  );
};

export default App;
