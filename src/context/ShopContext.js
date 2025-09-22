import { createContext, useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([]); // كل المنتجات من Firestore
  const [loading, setLoading] = useState(true);

  // filters state (Sidebar هيعدّلها عبر setFilters)
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    price: { min: "", max: "" },
    availability: [], // values: "inStock", "outOfStock"
  });

  const productsPerPage = 12;

  // جلب المنتجات من Firestore
  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const q = await getDocs(collection(db, "products"));
        const data = q.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        if (mounted) setProducts(data);
      } catch (err) {
        console.error("fetchProducts error:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => (mounted = false);
  }, []);

  // filteredProducts حسب الفلاتر
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // category
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
        return false;
      }
      // brand
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }
      // availability
      if (
        filters.availability.length > 0 &&
        !filters.availability.includes(p.availability ? "inStock" : "outOfStock")
      ) {
        return false;
      }
      // price
      const min = parseFloat(filters.price.min) || 0;
      const max = parseFloat(filters.price.max) || Infinity;
      const price = parseFloat(p.price) || 0;
      if (price < min || price > max) return false;

      return true;
    });
  }, [products, filters]);

  const filteredCount = filteredProducts.length;

  // total pages بناءً على المنتجات المفلترة
  const totalPages = Math.max(1, Math.ceil(filteredCount / productsPerPage));

  // لو الفلاتر اتغيرت نرجع للصفحة 1
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // لو currentPage أكبر من totalPages نصححها
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
    if (currentPage < 1) setCurrentPage(1);
  }, [totalPages, currentPage]);

  // currentProducts slice للصفحة الحالية
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // cart functions
  const increaseQuantity = (id) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const decreaseQuantity = (id) =>
    setCart((prev) => {
      if (!prev[id]) return prev;
      const copy = { ...prev };
      copy[id] = copy[id] - 1;
      if (copy[id] <= 0) delete copy[id];
      return copy;
    });

  return (
    <ShopContext.Provider
      value={{
        // cart
        cart,
        increaseQuantity,
        decreaseQuantity,

        // pagination & products
        currentPage,
        setCurrentPage,
        productsPerPage,
        totalPages,
        products, // كل المنتجات (لو محتاجة Sidebar counts)
        filteredCount,
        currentProducts,
        loading,

        // filters
        filters,
        setFilters,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
