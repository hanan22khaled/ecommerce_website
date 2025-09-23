// تأكد من استيراد useContext
import { createContext, useState, useContext, useEffect, useMemo } from "react";

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

export const ProductsDetailsContext = createContext();

// البيانات الثابتة
const productImages = [img1, img2, img3, img4];
const sizes = ['small', 'medium', 'large'];
const fullText = "Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin B1 , Riboflavin Vitamin B2 , Folic Acid), Palm and/or Canola Oil, Cocoa (Processed with Alkali), High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt, High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt, Whey, Soy Lecithin, Artificial Flavor, Caramel Color, and Annatto Extract (for color).";
const truncatedText = fullText.slice(0, 250);

export const ProductsDetailsProvider = ({ children ,productId }) => {
  //show and hide modal
  const [showModal, setShowModal] = useState(false);
  //to know current image and show it in master 
  const [currentImg, setCurrentImg] = useState(0);
  //to know what is the active size
  const [activeSize, setActiveSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  //know if expabe read more or not
  const [isExpanded, setIsExpanded] = useState(false);

//to get Product's details 
  const [product, setProduct] = useState(null);


  const [products, setProducts] = useState([]); // كل المنتجات من Firestore
  // filters state (Sidebar هيعدّلها عبر setFilters)
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
  });



 useEffect(() => {
    const fetchProductById = async () => {
      if (!productId) {
        setLoading(false);
        setError("Product ID not provided.");
        return;
      }
      
      try {
        const productDocRef = doc(db, 'products', productId);
        const productDoc = await getDoc(productDocRef);

        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
          setError(null);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to fetch product: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [productId]); // Add productId as a dependency

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
      return true;
    });
  }, [products, filters]);

  const contextValue = {
    showModal,
    currentImg,
    activeSize,
    quantity,
    isExpanded,
    setShowModal,
    setCurrentImg,
    setActiveSize,
    setQuantity,
    setIsExpanded,
    productImages,
    sizes,
    fullText,
    truncatedText,
    products,
    product,
    // filters
    filters,
    setFilters,

  };

  return (
    <ProductsDetailsContext.Provider value={contextValue}>
      {children}
    </ProductsDetailsContext.Provider>
  );
};

export const useProductsDetails = () => {
  return useContext(ProductsDetailsContext);

};