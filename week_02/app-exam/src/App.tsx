import React from "react";
import "./App.css";
import UserProvider from "./Exam/UserProvider";
import { FormInfo } from "./Exam/UserForm";
import type { User } from "./Exam/type";
import { UserList } from "./Exam/UserList";
import { NavBar } from "./Exam/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";
import { UserDetail } from "./Exam/UserDetail";

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
