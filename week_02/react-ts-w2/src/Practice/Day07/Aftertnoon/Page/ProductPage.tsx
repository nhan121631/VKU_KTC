import React, { useEffect } from "react";
import { Filter } from "../Filter";
import type { Product } from "../type/Product";
import { ProductList } from "../ProductList";
import { Outlet } from "react-router";

export const ProductPage = () => {
  return (
    <div className="flex w-full mt-5 justify-between items-start gap-x-2 px-15">
      <Filter />
      <div className="flex flex-5/6 flex-col gap-y-2 px-4 py-2 ">
        <h1 className="text-2xl">Danh sách sản phẩm</h1>
        {/* {<ProductList />} */}
        <Outlet />
      </div>
    </div>
  );
};
