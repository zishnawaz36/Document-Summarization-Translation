import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);  // User is logged in, token exists
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No token found. You're not logged in.");
        return;
      }

      const response = await axios.post(
        "/project/logout", 
        {}, 
        { 
          headers: { 
            Authorization: `Bearer ${token}` 
          } 
        }
      );

      alert(response.data.message);  // Show logout success message

      // After logout, remove the token and update isLogged state
      localStorage.removeItem("token");
      setIsLogged(false);  // Set user as logged out

      // Redirect to login page after logout
      navigate("/login");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full py-4 bg-gray-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img className="h-12 w-20" src="/assets/logo.jpg" alt="Logo" />
        </div>

        <nav>
          <ul className="flex space-x-6 text-black font-bold">
            <li>
              <Link
                to="/about"
                className="bg-blue-400 text-white rounded-lg p-2 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="bg-blue-400 text-white rounded-lg p-2 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/model"
                className="bg-blue-400 text-white rounded-lg p-2 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
              >
                Model
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-blue-400 text-white rounded-lg p-2 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
              >
                Contact
              </Link>
            </li>
            <li>
              {!isLogged ? (
                <button
                  className="bg-green-500 text-white rounded-lg p-2"
                  onClick={handleLogout}
                >
                  Login
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-green-400 text-white rounded-lg p-2"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
