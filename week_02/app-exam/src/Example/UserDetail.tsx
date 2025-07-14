import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import UserProvider from "./UserProvider";
import type { User } from "./type";

export const UserDetail = () => {
  const { id } = useParams();
  const { users } = React.useContext(UserProvider);
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const foundUser = users.find((u) => u.id === Number(id));
    if (foundUser) {
      setUser(foundUser);
    } else {
      setUser(undefined);
    }
  }, [id, users]);

  if (!user) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-bold mb-4">User Detail</h2>
        <p className="text-red-500">User not found</p>
        <div className="mt-4">
          <Link to="/users" className="text-blue-500 hover:underline">
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold mb-4 text-center">User Detail</h2>
      <div className="flex">
        <span>Name: </span>
        <span className="ml-2">{user.name}</span>
      </div>
      <div className="flex">
        <span>Email: </span>
        <span className="ml-2">{user.email}</span>
      </div>
      <div className="flex">
        <span>Age: </span>
        <span className="ml-2">{user.age}</span>
      </div>
      <div className="mt-4">
        <Link to="/users" className="text-blue-500 hover:underline">
          Back
        </Link>
      </div>
    </div>
  );
};
