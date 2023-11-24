import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import CountContextProvider from "./contexts/CountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountContextProvider>
        <App />
      </CountContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
