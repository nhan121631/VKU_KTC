import { Link } from "react-router";

export const BtnApp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link to="/Day07/HomeWork">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Go to HomeWork
        </button>
      </Link>
    </div>
  );
};
