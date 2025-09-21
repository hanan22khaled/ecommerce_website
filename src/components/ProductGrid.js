// components/ProductGrid.js
import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShopContext } from "../context/ShopContext";

function ProductGrid() {
  const { currentProducts, loading, filteredCount } = useContext(ShopContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (!currentProducts || currentProducts.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div>
      

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
