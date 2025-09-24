import { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";

function Sidebar() {
  const { products, filters, setFilters } = useContext(ShopContext);

  // براندات ثابتة
  const staticBrands = ["Frito Lay", "Quaker", "Cola", "Welch's", "Oreo"];

  // حساب العد من المنتجات المحمّلة
  const { availabilityCounts, brandCounts } = useMemo(() => {
    const availability = { inStock: 0, outOfStock: 0 };
    const brands = {};
    products.forEach((p) => {
      if (p.availability === true) availability.inStock += 1;
      else availability.outOfStock += 1;
      if (p.brand) brands[p.brand] = (brands[p.brand] || 0) + 1;
    });
    return { availabilityCounts: availability, brandCounts: brands };
  }, [products]);

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const handleAvailabilityChange = (status) => {
    setFilters((prev) => ({
      ...prev,
      availability: prev.availability.includes(status)
        ? prev.availability.filter((a) => a !== status)
        : [...prev.availability, status],
    }));
  };

  const handlePriceChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [field]: value },
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      price: { min: "", max: "" },
      availability: [],
    });
  };

  const categories = [
    "Beverages",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Fruits & Vegetables",
    "Grocery & Staples",
    "Household Needs",
    "Meats & Seafood",
  ];

  return (
    <aside className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2 text-gray-700">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brands</h3>
        <ul className="space-y-2 text-gray-700">
          {staticBrands.map((brand) => (
            <li key={brand} className="flex justify-between items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
              <span className="text-gray-500 text-base">
                ({brandCounts[brand] || 0})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="From  0"
            className="w-1/2 border rounded p-2 text-sm font-semibold"
            value={filters.price.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
          />
          -
          <input
            type="number"
            placeholder="To  65.00"
            className="w-1/2 border rounded p-2 text-sm font-semibold"
            value={filters.price.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Availability</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.availability.includes("inStock")}
                onChange={() => handleAvailabilityChange("inStock")}
              />
              IN STOCK
            </label>
            <span className="text-gray-500 text-base">
              ({availabilityCounts.inStock || 0})
            </span>
          </li>

          <li className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.availability.includes("outOfStock")}
                onChange={() => handleAvailabilityChange("outOfStock")}
              />
              OUT OF STOCK
            </label>
            <span className="text-gray-500 text-base">
              ({availabilityCounts.outOfStock || 0})
            </span>
          </li>
        </ul>
      </div>

      {/* Banner */}
      <div className="mt-6">
        <img
          src="../../sidebar-banner.gif.png"
          alt="Ad banner"
          className="w-full sm:w-3/4 md:w-full lg:w-full h-auto rounded-lg shadow mx-auto"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
