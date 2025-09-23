import { createContext, useContext, useMemo, useState } from "react";

export const CheckoutContext = createContext();

export const useCheckout = () => {
    return useContext(CheckoutContext);
}


export const CheckoutProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'T-shirt', price: 25.00, quantity: 2, imagePath: '../../assets/images/img1.png' },
        { id: 2, name: 'Jeans', price: 60.00, quantity: 1, imagePath: '../../assets/images/img2.png' },
        { id: 3, name: 'Shoes', price: 80.00, quantity: 1, imagePath: '../../assets/images/img3.png' },

    ]);


    // حساب المجموع الفرعي (subtotal) والمجموع الكلي (total)
    const { subtotal, total ,taxes} = useMemo(() => {

        // حساب المجموع الفرعي
        const calculatedSubtotal = cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        // حساب الضرائب
        const taxRate = 0.10;
        const calculatedTaxes = calculatedSubtotal * taxRate;
        // حساب المجموع الكلي
        const calculatedTotal = calculatedSubtotal + calculatedTaxes

        return {
            subtotal: calculatedSubtotal,
            total: calculatedTotal,
            taxes: calculatedTaxes,
        };
    }, [cartItems])

    const value = useMemo(() => ({
        cartItems,
        subtotal,
        total,
        taxes,
    }), [cartItems, subtotal, total,taxes])

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );


};