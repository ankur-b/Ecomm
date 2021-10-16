import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider as UserProvider } from "./Context/UserContext";
import { Provider as CardProvider } from "./Context/CartContext";
import { Provider as DirectoryProvider } from "./Context/Directory/DirectoryContext";
import { Provider as ShopProvider } from "./Context/Shop/ShopContext";
import "./index.css";
ReactDOM.render(
  <UserProvider>
    <CardProvider>
      <DirectoryProvider>
        <ShopProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ShopProvider>
      </DirectoryProvider>
    </CardProvider>
  </UserProvider>,
  document.getElementById("root")
);
