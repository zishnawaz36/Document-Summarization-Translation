import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div className="w-full py-4 bg-gradient-to-blue-400 to-purple-300 shadow-lg">
      <div className="mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img className="h-12 w-20" src="/assets/logo.jpg" alt="Logo" />
        </div>

        <nav>
          <ul className="flex space-x-6 text-white font-bold">
            <li>
              <Link
                to="/about"
                className="bg-cyan-500 rounded-lg px-4 py-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="bg-cyan-500 rounded-lg px-4 py-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/model"
                className="bg-cyan-500 rounded-lg px-4 py-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Model
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-cyan-500 rounded-lg px-4 py-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
              >
                Contact
              </Link>
            </li>
            <li>
  <button
    onClick={logoutuser}
    className="bg-red-500 text-white rounded-lg px-4 py-2 hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
  >
    Logout
  </button>
</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
