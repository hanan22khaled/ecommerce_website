import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";
import ProductDetailsPage from "../components/ProductDetailsPage";
import { useProductsDetails } from "../context/ProductDetailsContext";
function ProductCard({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(ShopContext);
  const quantity = cart[product.id] || 0;
      const { showModal ,setShowModal } = useProductsDetails();
  

  return (
    <div onClick={() => setShowModal(true)} className="bg-white rounded-xl shadow hover:shadow-lg p-6 relative flex flex-col  gap-5">
      {product.discount && (
        <span className="absolute top-2 left-4 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}%
        </span>
      )}

      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full sm:w-40 h-40 object-contain mx-auto"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="h-12 font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>

        {product.availability ? (
          <p className="text-green-500 text-xs font-bold mb-1">IN STOCK</p>
        ) : (
          <p className="text-red-600 text-sm font-bold mb-1">OUT OF STOCK</p>
        )}

        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < (product.rating || 0) ? "gold" : "lightgray"}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 20.013 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
            </svg>
          ))}
          <span className="text-black px-2">
            ({product.review || 0}) <span className="px-1">reviews</span>
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          {product.oldPrice && (
            <span className="text-gray-400 line-through font-semibold text-base">
              ${parseFloat(product.oldPrice).toFixed(2)}
            </span>
          )}
          <span className="text-red-600 text-lg font-bold">
            ${parseFloat(product.price).toFixed(2)}
          </span>
        </div>

       <div className="flex items-center justify-center mt-auto">
  <button
    onClick={() => decreaseQuantity(product.id)}
    disabled={quantity === 0}
    className={`w-8 h-9 px-2 flex items-center justify-center ${
      quantity === 0
        ? "bg-gray-100 text-black font-bold cursor-not-allowed rounded-l-full"
        : "bg-gray-200 text-black font-bold hover:bg-gray-300 rounded-l-full"
    }`}
  >
    −
  </button>

  <span className="w-16 sm:w-20 h-9 text-center font-semibold border-t border-b p-1 border-gray-200">
    {quantity}
  </span>

  <button
    onClick={() => increaseQuantity(product.id)}
    className="w-8 h-9 px-2 flex items-center justify-center bg-yellow-400 text-black font-bold hover:bg-yellow-300 rounded-r-full"
  >
    +
  </button>
</div>

      </div>
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
  );
}

export default ProductCard;
