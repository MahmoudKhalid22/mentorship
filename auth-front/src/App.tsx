import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/me",
      element: <User />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
