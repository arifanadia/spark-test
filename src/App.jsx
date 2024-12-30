import React from "react";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/vertical";

const App = () => {
  return (
    <div className="min-h-screen w-ful">
      <Horizontal />
      <div>
        <Vertical />
      </div>
    </div>
  );
};

export default App;
