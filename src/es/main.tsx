import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Carregada pelo src/main.tsx em /es/: o idioma, o título e o noindex vêm daqui
document.documentElement.lang = "es";
document.title = "Academia de Copy Trade | Aprende a invertir con consistencia";
document.head.insertAdjacentHTML("beforeend", '<meta name="robots" content="noindex, nofollow" />');

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
