import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen p-5">
      {/* Main Layout */}
      <div className="container mx-auto flex flex-col md:flex-row gap-6 p-6">
        {/* Sidebar */}
        <Sidebar />

        {/* شبكة المنتجات + Pagination */}
        <div className="flex-1">
          {/* بانر */}
          <div
            className="w-full h-36 sm:h-40 md:h-56 lg:h-72 mb-5 rounded-lg bg-cover bg-center bg-no-repeat mx-auto"
            style={{ backgroundImage: "url('../../Group 10.png')" }}
          ></div>

          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-5 py-3 bg-green-50 rounded-lg">
            <p className="text-gray-600 text-sm mb-2 md:mb-0">
              <strong className="text-black">{products.length}</strong> Products
            </p>

            <div className="flex items-center gap-4">
              {/* Sort By */}
              <div className="flex items-center gap-2">
                <label className="text-gray-600 text-sm">
                  Sort by :{" "}
                  <strong className="text-black">
                    Alphabetically, A to Z
                  </strong>
                </label>
              </div>
            </div>
          </div>
          <ProductGrid products={products} />

          {/* Pagination (ممكن نخليها Dynamic بعدين) */}
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
