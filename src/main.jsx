import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouts from "./Components/Routes/Route";
import AuthProvider from "./Components/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouts}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
