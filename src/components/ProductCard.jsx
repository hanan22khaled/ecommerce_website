import React from 'react'
import { IoAdd } from 'react-icons/io5'; // Using a plus icon from react-icons

const ProductCard = ({ product }) => {
    return (

        <div className="m-2 w-[95%] h-56 relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">

            {/* On Sale Tag */}
            {product.onSale && (
                <span className="absolute top-2 left-2 bg-[#34AFA0] text-white text-xs font-bold px-2 py-1 rounded-2xl">
                    ON SALE
                </span>
            )}

            {/* Product Image */}
            <div className="h-28 flex items-center justify-center ">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                />
                {/* Plus Button */}
                <div className="absolute top-25 right-2">
                    <button className="p-2 rounded-full bg-[#34AFA0] text-white shadow-md hover:bg-[#2e9f91] transition-colors duration-200">
                        <IoAdd className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Product Details Section */}
            <div className="mt-4 ml-4 flex flex-col justify-between">
                <div>
                    <div className='h-18'>
                        {/* Price */}
                        <p className="text-gray-900 font-semibold text-base">
                            {product.price.new}
                            {product.price.old && (
                                <span className="text-gray-400 line-through ml-1">{product.price.old}</span>
                            )}
                        </p>

                        <div>
                            {/* Product Name */}
                            <h3 className="m-1 text-gray-800 text-sm line-clamp-2">{product.name}</h3>
                        </div>
                    </div>
                    {/* Unit */}
                    <p className="text-gray-500 text-xs">{product.unit}</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
