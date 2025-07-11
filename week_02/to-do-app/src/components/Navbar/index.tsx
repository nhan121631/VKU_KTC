import { useState, useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context";

const menuItems = [
  { label: "Our Tasks", path: "/tasks" },
  { label: "My Tasks", path: "/assignee-me" },
  { label: "Create Task", path: "/create-task" },
];

export const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-sky-900 text-white px-5 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">Task Management</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                   ${
                     isActive
                       ? "bg-white text-gray-900 shadow-md"
                       : "hover:bg-white hover:text-gray-900 hover:shadow-sm"
                   }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-800"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-800"
            >
              Log In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                 ${
                   isActive
                     ? "bg-white text-gray-900 shadow-md"
                     : "hover:bg-white hover:text-gray-900 hover:shadow-sm"
                 }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Auth Buttons - Mobile */}
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full bg-black text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-800"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-black text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-800"
            >
              Log In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
