import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "*", // Catch-all route for non-existing paths
    element: <Error />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
