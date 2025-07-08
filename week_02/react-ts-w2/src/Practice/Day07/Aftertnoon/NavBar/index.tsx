import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="flex px-16 py-4 bg-orange-400 shadow w-full text-white flex-wrap items-center">
      <div className="flex-1/3">
        <h1 className="text-2xl font-bold">Magazines</h1>
      </div>
      <nav className="rounded-lg px-4 py-2 flex-2/3">
        <ul className="flex flex-wrap gap-8 font-semibold justify-end items-center">
          <li>
            <NavLink
              to={`/`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2" // padding đồng nhất cho mọi trạng thái
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to={`/blog`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2" // padding đồng nhất cho mọi trạng thái
            >
              Blog
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to={`/categories`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2" // padding đồng nhất cho mọi trạng thái
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/products/category/all`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2"
            >
              Products
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to={`/login`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2" // padding đồng nhất cho mọi trạng thái
            >
              Login
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to={`/customer`}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "oklch(75% 0.183 55.934)",
                      borderRadius: "15px",
                    }
                  : undefined
              }
              className="px-4 py-2" // padding đồng nhất cho mọi trạng thái
            >
              Customer
            </NavLink>
          </li>
          <li className="flex items-center gap-1 p-2 text-orange-500 bg-white rounded-[5px] item">
            <FaCartPlus /> 0
          </li>
        </ul>
      </nav>
    </div>
  );
};
