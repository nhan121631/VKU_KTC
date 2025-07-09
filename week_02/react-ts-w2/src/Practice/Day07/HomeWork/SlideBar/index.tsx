import { NavLink } from "react-router";

const menuItems = [
  { label: "Patients", path: "/Day07/HomeWork/" },
  { label: "Overview", path: "/Day07/HomeWork/overview" },
  { label: "Map", path: "/Day07/HomeWork/map" },
  { label: "Departments", path: "/Day07/HomeWork/departments" },
  { label: "Doctors", path: "/Day07/HomeWork/doctors" },
  { label: "History", path: "/Day07/HomeWork/history" },
  { label: "Settings", path: "/Day07/HomeWork/settings" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-zinc-100 text-gray-800 min-h-screen p-6 border-r border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold mb-8 tracking-tight text-gray-700">
        Dashboard
      </h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/Day07/HomeWork/"}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
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
    </div>
  );
};
