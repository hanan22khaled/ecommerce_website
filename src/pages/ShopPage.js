import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

function ShopPage() {
    const { currentProducts } = useContext(ShopContext);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* <Controls /> */}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>


            <Pagination />
        </div>
    );
}

export default ShopPage;
