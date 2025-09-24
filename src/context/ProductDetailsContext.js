// استيراد React و Hooks
import { createContext, useState, useContext, useEffect, useMemo } from "react";

// استيراد الصور
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

// استيراد Firebase
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // تأكد أن المسار صحيح

// إنشاء الـ Context
export const ProductsDetailsContext = createContext();

// بيانات ثابتة
const productImages = [img1, img2, img3, img4];
const sizes = ['small', 'medium', 'large'];
const fullText = "Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin B1 , Riboflavin Vitamin B2 , Folic Acid), Palm and/or Canola Oil, Cocoa (Processed with Alkali), High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt, High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt, Whey, Soy Lecithin, Artificial Flavor, Caramel Color, and Annatto Extract (for color).";
const truncatedText = fullText.slice(0, 250);

// مزود الـ Context
export const ProductsDetailsProvider = ({ children, productId }) => {
  // الحالة للواجهة
  const [showModal, setShowModal] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [activeSize, setActiveSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  // البيانات من Firebase
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  // حالة التحميل والخطأ
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // الفلاتر
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
  });

  // جلب المنتج من Firebase عند تغيّر الـ ID
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
  }, [productId]);

  // المنتجات بعد تطبيق الفلاتر
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
        return false;
      }
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }
      return true;
    });
  }, [products, filters]);

  // القيمة المرسلة للمكونات الأخرى
  const contextValue = {
    // واجهة المستخدم
    showModal,
    setShowModal,
    currentImg,
    setCurrentImg,
    activeSize,
    setActiveSize,
    quantity,
    setQuantity,
    isExpanded,
    setIsExpanded,

    // بيانات المنتج
    productImages,
    sizes,
    fullText,
    truncatedText,
    product,
    products,

    // الفلاتر
    filters,
    setFilters,
    filteredProducts,

    // الحالة العامة
    loading,
    error,
  };

  return (
    <ProductsDetailsContext.Provider value={contextValue}>
      {children}
    </ProductsDetailsContext.Provider>
  );
};

// Hook مخصص للوصول للكونتكست
export const useProductsDetails = () => {
  return useContext(ProductsDetailsContext);
};