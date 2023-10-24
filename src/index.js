import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppContextProvider } from "./Contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
export const AppContext = createContext();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </StrictMode>
);
