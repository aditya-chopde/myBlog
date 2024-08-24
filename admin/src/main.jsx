import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlogContextProvider from "./context/BlogContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </StrictMode>
);
