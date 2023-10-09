import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Events from "../Pages/Events/Events";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import Apply from "../Pages/Apply/Apply";
import Error from "../Pages/Error/Error";

const myRouts = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        element: <Services></Services>,
      },
      {
        path: "/events",
        element: (
          <PrivateRoutes>
            <Events></Events>
          </PrivateRoutes>
        ),
      },
      {
        path: "/service/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/apply",
        element: (
          <PrivateRoutes>
            <Apply></Apply>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default myRouts;
