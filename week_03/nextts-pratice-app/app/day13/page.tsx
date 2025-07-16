import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export const dynamic = "force-dynamic";

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
    <div className="flex flex-col px-40 min-h-screen">
      <h1 className="text-2xl font-bold">Khuyến mãi online</h1>
      <Products products={datas} />
    </div>
  );
}

function Products({ products }: { products: Product[] }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mt-3">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white m-2 p-4 border border-gray-100 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-2xl transition basis-1/5 max-w-1/5 flex-grow-0 flex-shrink-0"
          >
            <div className="h-44 flex items-center justify-center mb-3 w-full">
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
                className="object-cover rounded-xl max-h-44"
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
