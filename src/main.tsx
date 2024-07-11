import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components/Pagination/pagination.css";
import EmptyPage from "./components/EmptyPage/EmptyPage.tsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import { FilmsProvider } from "./components/films/FilmsContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <EmptyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <FilmsProvider>
        <RouterProvider router={router} />
      </FilmsProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
