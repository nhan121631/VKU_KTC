import { Route, Routes } from "react-router";
import { MainApp } from "./Practice/Day07/Aftertnoon/RouteApp";
import { ProductPage } from "./Practice/Day07/Aftertnoon/Page/ProductPage";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainApp />}>
      <Route index element={<ProductPage />} />
    </Route>
  </Routes>
);
