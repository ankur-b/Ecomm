import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider as UserProvider } from "./Context/UserContext";
import { Provider as CardProvider } from "./Context/CartContext";
import "./index.css";
ReactDOM.render(
  <UserProvider>
    <CardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardProvider>
  </UserProvider>,
  document.getElementById("root")
);
