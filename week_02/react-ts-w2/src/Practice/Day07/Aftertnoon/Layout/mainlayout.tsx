import { Outlet } from "react-router";
import { NavBar } from "../NavBar";

export const MainLayout = () => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
