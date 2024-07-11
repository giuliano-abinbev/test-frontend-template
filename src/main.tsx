import { Theme } from "@abi-labs-hexa/web-v2/core/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@abi-labs-hexa/web-v2/core/theme/index.css";
import "@abi-labs-hexa/web-v2/core/theme/utility.css";
import "./main.scss";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
