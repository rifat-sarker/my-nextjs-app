import ProductCard from "@/components/product/ProductCard";

const AllProductPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">All Products</h1>
      <div className="grid grid-cols-4 gap-5 w-[90%] mx-auto mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default AllProductPage;
