import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./context/ShopContext";
import { ProductsDetailsProvider } from './context/ProductDetailsContext.js';
import { CheckoutProvider } from './context/CheckoutContext.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopProvider>
      <ProductsDetailsProvider>
        <CheckoutProvider>
          <App />
        </CheckoutProvider>
      </ProductsDetailsProvider>
    
    </ShopProvider>
  </React.StrictMode>
);

reportWebVitals();
