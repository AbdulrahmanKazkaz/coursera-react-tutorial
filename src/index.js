import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./index.css";

const ReactApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const app = document.getElementById("root");

ReactDOM.render(<ReactApp />, app);
