export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* product Image */}
      <img
        src={product.image}
        alt={product.model}
        className="w-full h-48 object-cover"
      />

      {/* product Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.brand} {product.model}
        </h2>
        <p className="text-sm text-gray-600">{product.processor}</p>
        <p className="text-sm text-gray-600">
          {product.ram} | {product.storage} | {product.gpu}
        </p>

        {/* Price & Availability */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
          <span
            className={`text-sm font-medium ${
              product.availability === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.availability}
          </span>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
