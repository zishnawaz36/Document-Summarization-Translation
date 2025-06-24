import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HeaderOne() {

  const navigate = useNavigate();

  return (
    <div className="w-full py-4 bg-blue-400 shadow-lg">
      <div className="flex justify-between">
        <div className="flex ml-5">
          <img className="h-12 w-20" src="/assets/logo.jpg" alt="Logo" />
        </div>

        <div className="m-4 mr-10">
           <ul className="flex space-x-20 text-black font-bold">
            
            <li>
              <Link
                to="/signup"
                className="bg-cyan-700 text-white rounded-lg p-3 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Register
              </Link>
            </li>
           
            
          </ul>
          </div> 
      </div>
    </div>
  );
}

export default HeaderOne;
