import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
const NavBar = () => {
  return (
    <div>
      <Logo />
      <nav className="bg-kar-blue p-4">
        <ul className="flex items-center justify-center space-x-6">
          <li className="mr-6">
            <NavLink
              to="/"
              // className="text-white hover:text-gray-300 font-bold text-lg"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-lg underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              to="/application"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-lg underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-lg"
              }
            >
              Application Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:text-gray-300 font-bold text-lg underline underline-offset-2"
                  : "text-white hover:text-gray-300 font-bold text-lg"
              }
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
