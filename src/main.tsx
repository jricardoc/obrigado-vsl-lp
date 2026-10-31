import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// O servidor responde este index.html em qualquer caminho: em /es/ quem desenha é a página LATAM (src/es)
if (location.pathname.startsWith("/es")) {
  import("./es/main.tsx");
} else {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
