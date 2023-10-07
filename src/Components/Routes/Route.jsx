import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const myRouts = createBrowserRouter([
	{
	path: '/',
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
			element: <Login></Login>,
		},
		{
			path: "/events",
			element: <Login></Login>,
		},
	]	
	}
]) 

export default myRouts;