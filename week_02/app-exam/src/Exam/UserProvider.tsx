import { createContext } from "react";
import type { User } from "./type";

const UserProvider = createContext<{
  users: User[];
  setUsers: (user: User[] | ((prev: User[]) => User[])) => void;
}>({
  users: [],
  setUsers: () => {},
});

export default UserProvider;
