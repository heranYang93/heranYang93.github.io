import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.min.css";
import "animate.css";
import App from "./App";
import { ModalProvider } from "./state/modal/provider";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
