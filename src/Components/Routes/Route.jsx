import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Events from "../Pages/Events/Events";

const myRouts = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        loader: () => fetch("/data.json"),
        element: <Services></Services>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
    ],
  },
]);

export default myRouts;
