import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HeaderOne() {

  const navigate = useNavigate();

  return (
    <div className="w-full py-4 bg-lime-300 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img className="h-12 w-20" src="/assets/logo.jpg" alt="Logo" />
        </div>

        <nav>
          <ul className="flex space-x-20 text-black font-bold">
            <li>
              <Link
                to="/about"
                className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Register
              </Link>
            </li>
            <li>
                <Link
                to="/login"
                className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Login
              </Link>
            </li>
            
          </ul>
          
        </nav>
      </div>
    </div>
  );
}

export default HeaderOne;
