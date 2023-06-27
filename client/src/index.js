import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";
import Footer from './components/footer/Footer';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
    <App />
    <Footer/>
    </ContextProvider>

  </StrictMode>,
  document.getElementById("root")
);