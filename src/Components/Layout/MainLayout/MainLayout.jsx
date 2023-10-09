import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Shared/Footer/Footer";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({ duration: "1500", delay: "400" });
  }, []);
  return (
    <div className="bg-[#ffffff]">
      <div className=" font-poppins">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
