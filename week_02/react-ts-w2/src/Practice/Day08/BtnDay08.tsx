import { Link } from "react-router";

export const BtnDay08 = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 h-screen items-center justify-center">
      <Link to="/day08/afternoon">
        <div className="flex items-center justify-center bg-gray-100">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Day 08 Afternoon
          </button>
        </div>
      </Link>
      <Link to="/day08/afternoon/formone">
        <div className="flex items-center justify-center bg-gray-100">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Day 08 homework
          </button>
        </div>
      </Link>
    </div>
  );
};
