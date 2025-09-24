import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 



// 1. إنشاء Context
export const HomeContext = createContext();


// 2. إنشاء Custom Hook
export const useHomeContext = () => useContext(HomeContext);

// 3. إنشاء Provider Component
export const HomeProvider = ({ children }) => {

    const [ bestSellers, setBestSellers ] = useState([]); 
    const [categories, setCategories] = useState([]); 
    const [ loading , setLoading ] = useState(true);
    const [ error , setError ] = useState(null);

    // جلب المنتجات  من Firestore
      const fetchBestSellers = async () => {
        setLoading(true);
        setError(null);
        try {
        const querySnapshot = await getDocs(collection(db, "HomeProducts"));
        const productsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setBestSellers(productsList);
        } catch (e) {
        console.error("Error fetching documents: ", e);
        setError("Failed to fetch products. Please try again later.");
        } finally {
        setLoading(false);
        }
    };
    
    //  جلب الفئات
    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            const categoriesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCategories(categoriesList);
        } catch (e) {
            console.error("Error fetching categories: ", e);
            setError("Failed to fetch categories. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

      // جلب المنتجات 
    useEffect(() => {
        fetchBestSellers();
        fetchCategories();
    }, []);

    const value = {
        bestSellers,
        categories,
        loading,
        error,
        fetchBestSellers,
        fetchCategories,
    };
    

    return (
        <HomeContext.Provider value={ value }>
            {children}
        </HomeContext.Provider>
    )


}
