import React from "react";
import "./App.css";
import UserProvider from "./Example/UserProvider";
import { FormInfo } from "./Example/UserForm";
import type { User } from "./Example/type";
import { UserList } from "./Example/UserList";
import { NavBar } from "./Example/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";
import { UserDetail } from "./Example/UserDetail";

function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  return (
    <UserProvider.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FormInfo />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </UserProvider.Provider>
  );
}
export default App;
