import { Outlet } from "react-router";
import { Sidebar } from "./SlideBar";

export function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
