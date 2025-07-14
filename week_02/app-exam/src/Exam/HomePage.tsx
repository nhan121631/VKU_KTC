import { FormInfo } from "./UserForm";
import { UserList } from "./UserList";

export const HomePage = () => {
  return (
    <>
      <div
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow
            space-y-4 w-full"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Welcome to User Management
        </h2>
      </div>
      <FormInfo />
      <UserList />
    </>
  );
};
