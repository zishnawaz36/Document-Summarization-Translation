import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  // ✅ Move this OUTSIDE useEffect
  const logoutuser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No token found. You're not logged in.");
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/project/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      localStorage.removeItem("token");
      setIsLogged(false);
      navigate("/login");
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  // ✅ Optional: remove this useEffect unless you want auto-logout on mount
  /*
  useEffect(() => {
    logoutuser(); // Auto logout on page load
  }, []);
  */

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div className="w-full py-4 bg-gray-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img className="h-12 w-20" src="/assets/logo.jpg" alt="Logo" />
        </div>

        <nav>
          <ul className="flex space-x-6 text-black font-bold">
            <li>
              <Link to="/about" className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110">
                Services
              </Link>
            </li>
            <li>
              <Link to="/model" className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110">
                Model
              </Link>
            </li>
            <li>
              <Link to="/contact" className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110">
                Contact
              </Link>
            </li>
            <li>
              <Link className="bg-cyan-500 text-white rounded-lg p-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110" onClick={logoutuser} to="#">Logout</Link> {/* Optional: keep to="#" if not navigating */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
