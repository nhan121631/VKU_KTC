import { useParams } from "react-router";
import { ProductCard } from "../ProductCard";
import type { Product } from "../type/Product";
import React, { useEffect } from "react";

export const ProductList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const { id } = useParams();
  console.log("id", id);
  const url =
    id !== "all"
      ? `https://api.escuelajs.co/api/v1/categories/${id}/products`
      : "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchProducts();
  }, [url]);
  return (
    <div className="product-list flex flex-wrap  gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
