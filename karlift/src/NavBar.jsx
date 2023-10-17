import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import  Logo from './Logo.jsx'
const NavBar = () => {
  return (
    <div>
      <Logo />
       <nav className="bg-kar-blue p-4">
 

            <ul className="flex items-center justify-center space-x-6">
              <li className="mr-6">
                <Link to="/" className="text-white hover:text-gray-300 font-bold text-lg">Home</Link>
              </li>
              <li className="mr-6">
                <Link to="/application" className="text-white hover:text-gray-300 font-bold text-lg">Application Form</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300 font-bold text-lg">About Me</Link>
              </li>
            </ul>
            </nav>



      
    </div>

   
  );
};

export default NavBar;