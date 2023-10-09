import { useContext } from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import userPic from "../../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/apply">Apply</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-[#ffffff]">
      <div className="navbar-start">
        <div>
          <h4 className="md:text-2xl font-bold flex justify-center items-center">
            <span className="text-[#041e42] text-4xl flex justify-center items-center">
              <LiaUniversitySolid></LiaUniversitySolid>
            </span>
            <span className="text-[#041e42] flex justify-center items-center">
              M-Unique
            </span>{" "}
            -Study
          </h4>
        </div>
        <div className="dropdown bg">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 
			  z-[1] p-4 font-bold
			  shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden bg-[#041e42] text-[#ffffff] rounded-full px-10 lg:flex">
        <ul className="menu menu-horizontal font-semibold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && <p className="text-lg font-semibold">{user?.displayName}</p>}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? <img src={user?.photoURL} /> : <img src={userPic} alt="" />}
          </div>
        </label>
        <Link to={"/login"}>
          {user ? (
            <button
              onClick={handleLogOut}
              className="rounded-lg btn-primary py-1 bg-base-300 px-5"
            >
              Logout
            </button>
          ) : (
            <button className="rounded-lg btn-primary py-1 bg-base-300 px-5">
              Login
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
