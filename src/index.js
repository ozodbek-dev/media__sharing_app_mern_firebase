import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Main } from "./pages/Main";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
