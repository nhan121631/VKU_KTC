import { Route, Routes } from "react-router";
import { MainLayout } from "./Layout/mainlayout";
import { HomePage } from "./Page/HomePage";
import { ProductPage } from "./Page/ProductPage";
import { ProductList } from "./ProductList";
import { BlogPage } from "./Page/BlogPage";
import { CategoriesPage } from "./Page/CategoriesPage";
import { LoginPage } from "./Page/LoginPage";
import { CustomerPage } from "./Page/CustomerPage";

export const MainApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />}>
          <Route path="category/:id" element={<ProductList />} />
        </Route>
        <Route path="blog" element={<BlogPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="customer" element={<CustomerPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};
