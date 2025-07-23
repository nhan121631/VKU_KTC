import { ButtonAddCart } from "./components/ButtonAddCart";
import { Cart } from "./components/Cart";

export const dynamic = "force-dynamic";

type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
};

type ProductProps = {
  products: ProductType[];
};

export default async function CartPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return (
    <div className="container mx-auto p-4">
      <Cart />
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Product products={data.products} />
    </div>
  );
}

const Product = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Products</h2>
      <div className="overflow-x-auto rounded-lg mt-4">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Category</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {product.id}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ${product.price}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.category}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <ButtonAddCart product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
