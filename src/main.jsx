import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TyxoSite from "../tyxo-site.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TyxoSite />
  </StrictMode>,
);
