import { Route, Routes } from "react-router";
import { MainLayout } from "./Layout/mainlayout";
import { HomePage } from "./Page/HomePage";
import { ProductPage } from "./Page/ProductPage";
import { ProductList } from "./ProductList";

export const MainApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />}>
          <Route path="category/:id" element={<ProductList />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};
