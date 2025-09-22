import { FaRegCreditCard } from "react-icons/fa"; 
function Checkout() {
  return (
    <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto bg-white p-4 sm:p-6 rounded-md shadow">
      {/* ✅ عنوان و لينك تسجيل الدخول */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Contact</h2>
        <a href="#" className="text-teal-600 hover:underline text-sm">
          Log in
        </a>
      </div>

      {/* ✅ ايميل / موبايل */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* ✅ اختيار الأخبار */}
      <label className="flex items-center space-x-2 mb-6 text-sm text-gray-700">
        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        <span>Email me with news and offers</span>
      </label>

      {/* ✅ العنوان التاني (Delivery) */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery</h3>

      {/* بلد */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Country/Region"
          defaultValue="United States"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* اسمين في صف واحد */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="First name (optional)"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* العنوان */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* شقة / اختيارية */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* كود + مدينة */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="Postal code (optional)"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="City"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* حفظ */}
      <label className="flex items-center space-x-2 mb-6 text-sm text-gray-700">
        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        <span>Save this information for next time</span>
      </label>

      {/* ✅ Shipping Method */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Shipping method
        </h3>
        <div className="flex justify-between border border-gray-300 rounded-md p-3 text-sm">
          <span>Standard</span>
          <span className="font-semibold">FREE</span>
        </div>
      </div>

      {/* ✅ Payment (فقط للتصميم) */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment</h3>
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-6 bg-gray-50">
          {/* أيقونة الكارد */}
          <FaRegCreditCard className="text-4xl text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm mb-2">
            All transactions are secure and encrypted.
          </p>
          </div>
        <button
          disabled
          className="mt-4 w-full bg-gray-300 text-gray-600 py-3 rounded-md cursor-not-allowed"
        >
          Pay now
        </button>

      </div>
    </div>
  );
}
export default Checkout;
