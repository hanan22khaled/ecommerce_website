import React, { useState } from "react";
import { db } from "../../src/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false); // ✅ للتحكم في الرسالة

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="relative bg-white font-inter shadow-2xl rounded-lg 
      px-6 sm:px-10 md:px-20 lg:px-32 
      py-10 sm:py-16 lg:py-20 
      w-full max-w-6xl mx-auto mb-6">
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-center text-black">
        Send Us
      </h2>
      <p className="text-center text-sm text-gray-500 mt-4 px-2 sm:px-6 md:px-12">
        Contact us for all your questions and opinions, or you can solve your
        problems in a shorter time with our contact offices.
      </p>

      <hr className="w-full mx-auto mt-8 sm:mt-12 mb-8 sm:mb-12 text-gray-100" />

      {/* ✅ Toast Success Message */}
      {success && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg transition transform animate-bounce text-sm sm:text-base">
          Message Sent Successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-2">Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 mb-2">Your message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-left">
          <button
            type="submit"
            className="px-6 sm:px-7 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
