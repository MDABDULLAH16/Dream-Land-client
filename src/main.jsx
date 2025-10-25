import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./contexts/AuthProvider/AuthProvider.jsx";
import ProductProvider from "./contexts/ProductProvider/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
