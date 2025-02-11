import ProductCard from "@/components/product/ProductCard";

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
      <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
