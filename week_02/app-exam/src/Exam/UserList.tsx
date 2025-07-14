import React from "react";
import UserProvider from "./UserProvider";
import { Link } from "react-router";

export const UserList = () => {
  const { users } = React.useContext(UserProvider);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">User List</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-100 text-blue-900">
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Age</th>
              <th className="py-2 px-4 border-b border-gray-200 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    {user.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    {user.age ?? "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <Link to={`/users/${user.id}`}>Details</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
