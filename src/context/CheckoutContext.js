import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

export const CheckoutContext = createContext();

export const useCheckout = () => {
    return useContext(CheckoutContext);
};

export const CheckoutProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    //  جلب بيانات السلة من قاعدة البيانات عند التحميل
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id, // ← document ID
                    ...doc.data()
                }));
                setCartItems(items);
            } catch (error) {
                console.error("There is error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    //  حساب subtotal, taxes, total
    const { subtotal, taxes, total } = useMemo(() => {
        const calculatedSubtotal = cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        const taxRate = 0.1;
        const calculatedTaxes = calculatedSubtotal * taxRate;
        const calculatedTotal = calculatedSubtotal + calculatedTaxes;

        return {
            subtotal: calculatedSubtotal,
            taxes: calculatedTaxes,
            total: calculatedTotal,
        };
    }, [cartItems]);

    const value = useMemo(() => ({
        cartItems,
        subtotal,
        taxes,
        total,
        loading,
    }), [cartItems, subtotal, taxes, total, loading]);

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
};