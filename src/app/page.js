import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 1,
    },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Products ab</h1>
      <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center">
        <Link className="bg-black text-white rounded-lg border p-2" href="/products">
          See more
        </Link>
      </div>
    </>
  );
}
