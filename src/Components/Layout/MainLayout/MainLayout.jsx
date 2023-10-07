import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins bg-yellow-50">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
