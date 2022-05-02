import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bulma/css/bulma.min.css";
import App from "./App";
// import { ModalProvider } from "./state/modal/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ModalProvider> */}
    <App />
    {/* </ModalProvider> */}
  </React.StrictMode>
);
