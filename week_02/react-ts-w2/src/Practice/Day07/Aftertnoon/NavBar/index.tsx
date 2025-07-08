import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="flex px-16 py-4 bg-orange-400 shadow w-full text-white flex-wrap items-center">
      <div className="flex-1/3">
        <h1 className="text-2xl font-bold">Magazines</h1>
      </div>
      <nav className="rounded-lg px-4 py-2 flex-2/3">
        <ul className="flex flex-nowrap gap-8 font-semibold justify-end items-center">
          <NavLink
            to={`/`}
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold" } : undefined
            }
          >
            Home
          </NavLink>
          <li>Block</li>
          <li>Category</li>
          <li>
            {" "}
            <NavLink
              to={`/products/category/all`}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
            >
              {" "}
              Products
            </NavLink>
          </li>
          <li>Login</li>
          <li>Customer</li>
          <li className="flex items-center gap-1 p-2 text-orange-500 bg-white rounded-[5px] item">
            <FaCartPlus /> 0
          </li>
        </ul>
      </nav>
    </div>
  );
};
