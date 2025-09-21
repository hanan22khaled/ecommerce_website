import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Controls() {
  const { itemsPerPage, setItemsPerPage, sortBy, setSortBy } = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center mb-6">
      {/* Items Per Page */}
      <div>
        <label className="mr-2">Show:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
        </select>
      </div>
    </div>
  );
}

export default Controls;
