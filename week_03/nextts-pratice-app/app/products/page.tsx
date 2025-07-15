import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export const dynamic = "force-static";

const fetchProducts = async () => {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=15&limit=10"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default async function Page() {
  const datas: Product[] = await fetchProducts();
  return (
    <div className="max-w-6xl mx-auto py-10">
      <Products products={datas} />
    </div>
  );
}

function Products({ products }: { products: Product[] }) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-[#2980b9] mb-2 text-center">
        Products
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Explore our latest products below.
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white m-2 p-4 border border-gray-100 rounded-2xl shadow-lg w-72 flex flex-col items-center hover:shadow-2xl transition"
          >
            <div className="w-full h-44 flex items-center justify-center mb-3">
              <Image
                src={
                  product.images &&
                  product.images[0] &&
                  product.images[0].startsWith("http")
                    ? product.images[0]
                    : "/fallback.png"
                }
                alt={product.title}
                width={200}
                height={176}
                className="object-cover rounded-xl max-h-44 w-full"
                loading="lazy"
              />
            </div>
            <h2 className="text-lg font-bold text-[#2980b9] mb-1 text-center line-clamp-2">
              {product.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2 text-center line-clamp-2">
              {product.description}
            </p>
            <span className="text-xl font-semibold text-green-600 mb-2">
              ${product.price}
            </span>
            <Link
              href={`/product-details/${product.id}`}
              className="mt-auto px-4 py-2 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] text-white rounded-full font-semibold shadow hover:from-[#2573a6] hover:to-[#4fc3f7] transition text-center"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
