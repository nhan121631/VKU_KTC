import { BrowserRouter } from "react-router";
// import { MainApp } from "./Aftertnoon/RouteApp";
import { DashBoardRoute } from "./HomeWork/DashBoardRoute";

export const Day07 = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Index /> */}
        {/* <MainApp /> */}
        <DashBoardRoute />
      </BrowserRouter>
    </>
  );
};
