import { Outlet } from "react-router";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

export const MainLayout = () => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
