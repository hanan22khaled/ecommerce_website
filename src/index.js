import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./context/ShopContext";
import { ProductsDetailsProvider } from './context/ProductDetailsContext.js';
import { CheckoutProvider } from './context/CheckoutContext.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';
import { HomeProvider } from "./context/HomeContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeProvider>
      <ShopProvider>
        <ProductsDetailsProvider>
          <CheckoutProvider>
            <App />
          </CheckoutProvider>
        </ProductsDetailsProvider>
      </ShopProvider>
    </HomeProvider>
  </React.StrictMode>
);

reportWebVitals();
