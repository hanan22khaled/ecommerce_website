import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa"; 
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    saveInfo: false,
    news: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "formdata"), formData);
      alert("✅ Data sent to Firestore successfully!");
      setFormData({
      email: "",
      country: "United States",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      postalCode: "",
      city: "",
      saveInfo: false,
      news: false,
    });
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("❌ Error saving data");
    }
  };

  // 🟢 شرط: لو كل الـ inputs فاضية → disable
  const isFormEmpty = Object.values(formData).every(
    (value) => value === "" || value === false || value === "United States"
  );

  return (
    <form 
      className="bg-white p-6 sm:p-6 "
      onSubmit={handleSubmit}
    >
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email or mobile phone number"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* ✅ اختيار الأخبار */}
      <label className="flex items-center space-x-2 mb-6 text-sm text-gray-700">
        <input 
          type="checkbox" 
          name="news"
          checked={formData.news}
          onChange={handleChange}
          className="w-4 h-4 border-gray-300 rounded" 
        />
        <span>Email me with news and offers</span>
      </label>

      {/* ✅ العنوان التاني (Delivery) */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery</h3>

      {/* بلد */}
      <div className="mb-3">
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country/Region"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* اسمين في صف واحد */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name (optional)"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* العنوان */}
      <div className="mb-3">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* شقة / اختيارية */}
      <div className="mb-3">
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* كود + مدينة */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal code (optional)"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="border border-gray-300 rounded-md p-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* حفظ */}
      <label className="flex items-center space-x-2 mb-6 text-sm text-gray-700">
        <input 
          type="checkbox" 
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="w-4 h-4 border-gray-300 rounded" 
        />
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

      {/* ✅ Payment */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment</h3>
        <div className="flex flex-col items-center text-center border border-gray-300 rounded-md p-6 bg-gray-50">
          <FaRegCreditCard className="text-4xl text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm mb-2">
            All transactions are secure and encrypted.
          </p>
        </div>
        <button
          type="submit"
          disabled={isFormEmpty}
          className={`mt-4 w-full py-3 rounded-md ${
            isFormEmpty 
              ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          Pay now
        </button>
      </div>
    </form>
  );
}

export default Checkout;
