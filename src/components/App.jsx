import React from "react";
import "../styles/global.scss";
import ComponentDidUpdate from "./ComponentDidUpdate";

const App = () => {
  return (
    <div>
      <h1>Component Did Mount and Update</h1>
      <ComponentDidUpdate />
    </div>
  );
};

export default App;
