export const dynamic = "force-static";
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );
  const products = await response.json();
  if (!products || !Array.isArray(products)) {
    return [];
  }
  return products.slice(0, 5).map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const product = await response.json();
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-[#2980b9] mb-2 text-center">
        {product.title}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={product.images[0]}
          alt={product.title}
          className="object-cover rounded-xl max-full w-full md:w-1/2"
          loading="lazy"
        />
        <div className="md:w-1/2">
          <p className="text-gray-500 text-sm mb-2">{product.description}</p>
          <span className="text-xl font-semibold text-green-600 mb-2">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
