import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">User Management</h1>
        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full text-base font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-stone-500 shadow-md"
                    : "hover:bg-white hover:text-stone-500 hover:shadow"
                }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full text-base font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-stone-500 shadow-md"
                    : "hover:bg-white hover:text-stone-500 hover:shadow"
                }`
            }
          >
            Users
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
