import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useProductsDetails } from "../Contexts/ProductDetailsContext";
import ProductDetailsPage from "./ProductDetailsPage";


const Navbar = () => {
    const { showModal ,setShowModal } = useProductsDetails();
    return (
        <div className="bg-gray-200">
            <div className=" max-w-[1200px] mx-auto p-4 flex justify-between items-center" >
                <a className="text-2xl font-bold italic">WebDevBey</a>

                <Link to="/checkout">Proceed to Checkout</Link>

                <div onClick={() => setShowModal(true)} className="flex gap-4 items-center cursor-pointer">Show</div>
                {showModal && (
                    <div onClick={() => setShowModal(false)} className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 p-2">
                        <div onClick={(e) => e.stopPropagation()} className="bg-white w-full h-full lg:w-[50%] md:h-[99%] p-2 relative flex flex-col rounded-lg">
                            <div className="absolute top-1 right-1 cursor-pointer  z-10">
                                <IoClose onClick={() => setShowModal(false)} size={30} />
                            </div>
                            <div className="flex-1 overflow-y-auto mt-2">
                                <ProductDetailsPage />
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar
