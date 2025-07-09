import { Link } from "react-router";

export const BtnAfternoonDay8 = () => {
  return (
    <Link to="/day08/afternoon/formone">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Form One
        </button>
      </div>
    </Link>
  );
};
