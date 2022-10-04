import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ThemeContext from "./themeContext" 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>
);
