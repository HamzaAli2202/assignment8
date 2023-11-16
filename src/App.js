import React from "react";
import { CompA } from "./components/CompA";
import { CompB } from "./components/CompB";
import"./components/common.css"


function App() {
  return (
    <div className="main">
      <table>
        <tr>
          <CompA />
          <CompB />
          <CompA />
          <CompB />
          <CompA />

        </tr>
        <tr>
          <CompB />
          <CompA />
          <CompB />
          <CompA />
          <CompB />
        </tr>
      </table>
    </div>
  );
}

export default App;
