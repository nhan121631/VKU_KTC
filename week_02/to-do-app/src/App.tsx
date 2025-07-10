import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { LogInPage } from "./pages/LoginPage";
import { AccessDeniedPage } from "./pages/AccessDeniedPage";
import { OurTasksPage } from "./pages/OurTasksPage";
import React, { useEffect } from "react";
import type { User } from "./types";
import { MyTaskPage } from "./pages/MyTasksPage";
import AuthContext from "./context";
import { CreateTaskPage } from "./pages/CreateTaskPage";
import { UpdateTaskPage } from "./pages/UpdateTaskPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="bg-white min-h-screen flex flex-col">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<LogInPage />} />
            <Route path="/login" element={<LogInPage />} />

            {/* Private */}
            {user && <Route path="/tasks" element={<OurTasksPage />} />}
            {user && <Route path="/assignee-me" element={<MyTaskPage />} />}
            {user && <Route path="/create-task" element={<CreateTaskPage />} />}
            {user && (
              <Route path="/update-task/:id" element={<UpdateTaskPage />} />
            )}

            <Route path="/*" element={<AccessDeniedPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
