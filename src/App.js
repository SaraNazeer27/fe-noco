import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import ApiBinding from "./ApiBinding/ApiBinding";
import Workflow from "./Workflow/Workflow";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Workflow", element: <Workflow /> },
    { path: "/ApiBinding", element: <ApiBinding /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
