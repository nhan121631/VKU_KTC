import { useParams } from "react-router";
import { ProductCard } from "../ProductCard";
import type { Product } from "../type/Product";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => (
  <div className="w-[200px] h-[300px] rounded bg-white p-2 shadow">
    <Skeleton height={160} borderRadius={8} />
    <Skeleton height={20} style={{ marginTop: 8 }} />
    <Skeleton height={20} width="80%" style={{ marginTop: 4 }} />
  </div>
);

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  const limit = 4;
  const offset = (page - 1) * limit;

  const fetchUrl =
    id !== "all"
      ? `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${offset}&limit=${limit}`
      : `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setProducts(data);

        // Nếu là "all", lấy tổng số lượng sản phẩm từ headers X-Total-Count (nếu có)
        if (id === "all") {
          const countRes = await fetch(
            "https://api.escuelajs.co/api/v1/products"
          );
          const allData = await countRes.json();
          setTotalProducts(allData.length);
        } else {
          const countRes = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${id}/products`
          );
          const allData = await countRes.json();
          setTotalProducts(allData.length);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [fetchUrl, id]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="space-y-6">
      <div className="product-list flex flex-wrap gap-4 justify-center">
        {loading
          ? Array.from({ length: limit }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
