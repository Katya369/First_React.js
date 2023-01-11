import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { add, multiply, subtract, divide } from "./calculator.js";
import Heading from "./Heading.jsx";
import List from "./List.jsx";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <List />
    <Heading />
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
    ,
  </StrictMode>
);
