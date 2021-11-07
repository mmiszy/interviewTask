import { render } from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { App } from "./Components/App/App";
import { reportWebVitals } from "./reportWebVitals";
import { queryClient } from "./queries/queryClient";
import { StrictMode } from "react";

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
