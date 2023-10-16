import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import  Logo from './Logo.jsx'
const NavBar = () => {
  return (
    <div>
      <Logo />
       <nav className="bg-blue-500 p-4 flex justify-between items-center">
 

            <ul className="flex">
              <li className="mr-6">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li className="mr-6">
                <Link to="/application" className="text-white hover:text-gray-300">Application Form</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">About Me</Link>
              </li>
            </ul>
            </nav>



      
    </div>

   
  );
};

export default NavBar;