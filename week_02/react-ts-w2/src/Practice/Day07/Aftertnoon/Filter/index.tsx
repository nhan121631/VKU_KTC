import React, { useEffect } from "react";
import type { Category } from "../type/Category";
import { NavLink } from "react-router";
export const Filter = () => {
  const url = "https://api.escuelajs.co/api/v1/categories";
  const [categories, setCategories] = React.useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="filter flex flex-1/6 flex-col gap-y-2 px-4 py-2">
      <h1 className="text-3xl">Bộ lọc</h1>
      <div className="categories flex flex-col gap-y-2">
        {categories.map((category, index) => (
          <div className="items flex items-center gap-x-2" key={index}>
            {/* <input
              type="checkbox"
              name="categories"
              id={(category.id, toString())}
              value={category.name}
            ></input> */}
            <NavLink
              to={`/products/category/${category.id}`}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
            >
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
