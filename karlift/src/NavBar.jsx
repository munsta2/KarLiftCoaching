import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import InstagramLogo from "./Instagram.jsx";
const NavBar = () => {
  return (
    <div>
      <Logo />
      <nav className="bg-kar-blue p-4">
        <ul className="flex items-center justify-center space-x-6">
          <li className="mr-6 text-center justify-center">
            <NavLink
              to="/"
              // className="text-white hover:text-gray-300 font-bold text-lg"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-xl underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-xl"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6 text-center justify-center">
            <NavLink
              to="/application"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-xl underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-xl"
              }
            >
              Application Form
            </NavLink>
          </li>
          <li className="mr-6 text-center justify-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-xl underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-xl"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <InstagramLogo />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
