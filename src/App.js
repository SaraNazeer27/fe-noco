import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import ApiBinding from "./ApiBinding/ApiBinding";
import Workflow from "./Workflow/Workflow";
import RestApi from "./ApiBinding/Components/RestApi/RestApi";
import SoapApi from "./ApiBinding/Components/SoapApi/SoapApi";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Workflow", element: <Workflow /> },
    {
      path: "/ApiBinding",
      children: [
        { path: "/ApiBinding", element: <ApiBinding /> },
        { path: "/ApiBinding/REST/:id", element: <RestApi /> },
        { path: "/ApiBinding/SOAP/:id", element: <SoapApi /> },
        { path: "/ApiBinding/create/REST", element: <RestApi /> },
        { path: "/ApiBinding/create/SOAP", element: <SoapApi /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
