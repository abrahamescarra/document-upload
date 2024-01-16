import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "./styles/Body.css";
import "./styles/RadioButton.css";
import "./styles/Dropzone.css";
import "./styles/Header.css";
import "./styles/TestingCenter.css";
import "./styles/ToogleSwitch.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
