import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import ProductDetailsPage from "../../components/ProductDetailsPage";

import { useProductsDetails } from "../../context/ProductDetailsContext";
import "../home/home.css"

const HomePage = () => {
  return (
    <main>
      <div className="mx-auto w-full">
        {/* ✅ Hero Section */}
        <section
          className="
            w-[95%] md:w-[85%] lg:w-[75%]
            mx-auto
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-4 p-4 md:p-8
          "
        >
          {/* 🔵 بانر كبير (ياخد ثلثين في اللاب) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/800/500?random=2"
              alt="Promo Main"
              className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
            />

            {/* المحتوى فوق الصورة */}
            <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 text-black space-y-3">
              <div className="flex items-center space-x-3">
                <p className="text-xs md:text-sm text-gray-700">EXCLUSIVE OFFER</p>
                <p className="text-xs md:text-sm font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-800">
                  -20% OFF
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Feed your family<br />the best
              </h2>

              <p className="text-sm md:text-lg">Only this week. Don’t miss…</p>

              <div className="flex items-center space-x-3">
                <span className="text-gray-300 line-through text-sm md:text-lg">$10.99</span>
                <span className="text-red-500 text-xl md:text-2xl font-bold">$7.99</span>
              </div>

              <button className="px-3 py-1 md:px-4 md:py-2 bg-teal-500 rounded-full hover:bg-teal-400 transition text-white text-sm md:text-base">
                Shop Now →
              </button>
            </div>
          </div>

          {/* 🟠 بانر يمين (ياخد تلت في اللاب) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/400/500?random=1"
              alt="Promo Right"
              className="w-full h-[250px] md:h-[400px] object-cover"
            />
          </div>

          {/* 🟢 الصف التاني (صورتين صغار) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/250?random=3"
                alt="Promo Left Bottom"
                className="w-full h-[200px] md:h-[220px] object-cover"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <h4 className="text-sm md:text-lg text-gray-400">Big discount on legumes</h4>
                <h4 className="text-base md:text-xl font-bold text-gray-700">Big discount on legumes</h4>
                <button className="mt-2 px-3 py-1 md:px-4 md:py-1 rounded-full hover:bg-white hover:text-black transition bg-sky-900 text-white text-xs md:text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/250?random=4"
                alt="Promo Right Bottom"
                className="w-full h-[200px] md:h-[220px] object-cover"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <h4 className="text-sm md:text-lg text-gray-400">Big discount on legumes</h4>
                <h4 className="text-base md:text-xl font-bold text-gray-700">Big discount on legumes</h4>
                <button className="mt-2 px-3 py-1 md:px-4 md:py-1 rounded-full hover:bg-white hover:text-black transition bg-sky-900 text-white text-xs md:text-sm">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ باقي السكاشن */}
        <BestSellers />
        <Banner />
        <Fandv />
        <PromoBanner />
        <BreakfastDairy />
        <ThreeImagesSection />
        <BannerWithCardsSimple />
      </div>
    </main>
  );
};


// 👇 كومبوننت Best Sellers
function BestSellers() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };
      const { showModal ,setShowModal } = useProductsDetails();

  return (
    <section className="mx-auto py-8 relative w-[90%] md:w-[80%] lg:w-[70%] rounded-md">
      {/* العنوان */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold">BEST SELLERS</h2>
          <p className="text-gray-500 text-xs">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <button className="border border-gray-400 text-gray-600 px-3 py-2 text-xs rounded-full hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      {/* الكروت مع الاسكرول */}
      <div className="relative">
        {/* زرار الشمال */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* الكروت */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth pb-8 gap-4"
          onClick={() => setShowModal(true)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="border p-6 shadow-sm hover:shadow-md transition shrink-0 rounded-md"
              style={{ minWidth: "20%" }}
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/200/200?random=${i + 1}`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-36 object-contain"
                />
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded">
                  {10 + i}%
                </span>
              </div>

              <h3 className="text-xs font-medium mt-3">
                Product {i + 1} Name Example
              </h3>
              <p className="text-green-600 text-[10px] font-semibold mt-3">
                IN STOCK
              </p>
              <p className="text-gray-500 text-[10px] pt-4">
                <span className="text-yellow-400">★ ★ ★ ★ ☆</span> {i + 1} review
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="line-through text-gray-400 text-xs">
                  ${(10 + i) * 2}.00
                </span>
                <span className="text-red-500 font-bold text-sm">
                  ${(10 + i) * 1.5}
                </span>
              </div>

              <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-medium py-1.5 rounded-2xl">
                Add to cart
              </button>
            </div>
          ))}
          {showModal && (
                     <div onClick={() => setShowModal(false)} className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 p-2">
                         <div onClick={(e) => e.stopPropagation()} className="bg-white w-full md:w-[75%] lg:w-[50%] h-full md:h-[99%] p-2 relative flex flex-col rounded-lg">
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

        {/* زرار اليمين */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

const Banner = () => {
  return (
    <section
      className="
        w-[90%] sm:w-[80%] lg:w-[70%]
        h-[7rem] sm:h-[7rem] md:h-[7rem]
        bg-[url('https://picsum.photos/1200/300')]
        bg-cover bg-center bg-no-repeat
        mx-auto
        flex flex-col sm:flex-row
        justify-between items-center
        gap-4 sm:gap-0
        px-4 py-4 sm:py-0
        text-white rounded-md
      "
    >
      <p className="text-sm sm:text-base md:text-lg text-center sm:text-left text-green-500">
        <span className="font-bold">100% Secure Delivery</span> without contacting the courier
      </p>

      <button
        className="
          bg-green-500 text-white
          px-3 py-1 text-xs              /* 📱 موبايل صغير */
          sm:px-4 sm:py-1 sm:text-xs   /* 📱 تابلت */
          md:px-5 md:py-1 md:text-base   /* 💻 لابتوب */
          rounded-full
          hover:bg-green-600
          transition
        "
      >
        Shop Now
      </button>
    </section>
  );
};


function Fandv() {
  const products = Array.from({ length: 8 });

  return (
    <section className="mx-auto py-8 relative w-[90%] lg:w-[70%]">
      {/* ✅ العنوان + الزرار */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-xl font-bold">Fresh Fruits & Vegetables</h2>
          <p className="text-gray-500 text-xs">
            Fresh arrivals every week. Don't miss out!
          </p>
        </div>
        <button className="border border-gray-400 text-gray-600 px-3 py-2 text-xs rounded-full hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ✅ البانر */}
        <div className="lg:w-1/3 bg-green-100 shadow rounded-md overflow-hidden relative flex flex-col">
          {/* صورة + النص */}
          <div className="relative h-48 md:h-56">
            <img
              src="https://picsum.photos/300/400?grayscale"
              alt="Offer Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-4 bg-black/20 text-white space-y-1">
              <h4 className="text-sm md:text-md">Big discount on legumes</h4>
              <h2 className="text-md md:text-lg font-bold leading-snug">
                Feed your family <br /> the best
              </h2>
              <h4 className="text-xs">Big discount on legumes</h4>
              <button className="mt-2 px-4 py-1.5 bg-sky-800 text-white text-xs rounded-full hover:bg-sky-600 transition">
                View All
              </button>
            </div>
          </div>

          {/* التصنيفات */}
          <div className="flex-1 p-4 flex flex-col items-center justify-between">
            <div className="grid grid-cols-2 gap-2 text-center mb-4 text-xs">
              {[
                "Beverages",
                "Biscuits & Snacks",
                "Breads & Bakery",
                "Breakfast & Dairy",
                "Frozen Foods",
                "Fruits & Vegetables",
                "Grocery & Staples",
                "Household Needs",
                "Meats & Seafood",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-2 py-1 hover:text-teal-600 cursor-pointer transition"
                >
                  {item}
                </div>
              ))}
            </div>

            <button className="mb-3 self-start text-xs px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-200 transition">
              View All →
            </button>
          </div>
        </div>

        {/* ✅ المنتجات */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((_, i) => (
            <div
              key={i}
              className="border p-3 shadow-sm hover:shadow-md transition bg-white rounded-md"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/200/200?random=${i + 1}`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-32 object-contain"
                />
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded">
                  {10 + i}%
                </span>
              </div>

              <h3 className="text-xs font-medium mt-3">
                Product {i + 1} Name Example
              </h3>
              <p className="text-green-600 text-[10px] font-semibold mt-2">
                {i + 85} IN STOCK
              </p>
              <p className="text-gray-500 text-[10px] mt-1">
                <span className="text-yellow-400">★ ★ ★ ★ ☆</span> {i + 1} review
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="line-through text-gray-400 text-xs">
                  ${(10 + i) * 2}.00
                </span>
                <span className="text-red-500 font-bold text-sm">
                  ${(10 + i) * 1.5}
                </span>
              </div>

              <button className="mt-3 w-full bg-white border-2 border-solid border-green-600 hover:bg-green-600 hover:text-white text-green-600 text-xs font-medium py-1.5 rounded-2xl">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// 👇 بانر إضافي (Responsive + Centered Content)
const PromoBanner = () => {
  return (
    <section
      className="
        w-[90%] md:w-[80%] lg:w-[70%]
        h-[3rem]
        mx-auto 
        bg-rose-100
        flex 
        justify-center        /* 🔥 الكونتنت في النص أفقياً */
        items-center          /* 🔥 في النص عمودياً */
        text-center
        rounded-md 
        px-4 sm:px-6 
        py-3 sm:py-0
      "
    >
      <div className="flex flex-wrap justify-center items-center text-rose-500 gap-2">
        <p className="text-sm md:text-md">
          <span>Super discount for your</span>
        </p>

        <a
          href="#"
          className="text-rose-400 font-bold underline px-1 md:px-3 text-sm md:text-md"
        >
          First Purchase
        </a>

        <button
          className="
            border border-dashed border-rose-400
            text-rose-500
            px-3 md:px-4 py-1
            rounded-full
            hover:text-white hover:bg-rose-500
            transition
            text-xs md:text-sm
          "
        >
          FREE25BAC
        </button>

        <span className="text-xs md:text-sm text-gray-500 px-2 md:px-4">
          Limited time only!
        </span>
      </div>
    </section>
  );
};


function BreakfastDairy() {
  const products = Array.from({ length: 8 });

  return (
    <section className="mx-auto py-8 relative w-[90%] lg:w-[70%]">
      {/* 🔹 العنوان + زرار View All */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-xl font-bold">Breakfast & Dairy</h2>
          <p className="text-gray-500 text-xs">
            Do not miss the current offers until the end of month.
          </p>
        </div>
        <button className="border border-gray-400 text-gray-600 px-3 py-2 text-xs rounded-full hover:bg-gray-100 transition">
          View All →
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ✅ البانر الجانبي */}
        <div className="lg:w-1/3 bg-green-100 shadow rounded-md overflow-hidden relative flex flex-col">
          {/* الصورة الخلفية */}
          <div className="relative h-48 md:h-56">
            <img
              src="https://picsum.photos/300/400?grayscale"
              alt="Offer Banner"
              className="w-full h-full object-cover"
            />

            {/* النص فوق الصورة */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-4 bg-black/20 text-white space-y-1">
              <h4 className="text-sm md:text-md">Weekly Discounts on</h4>
              <h2 className="text-md md:text-lg font-bold leading-snug">
           Breakfast and Dairy <br /> the best
              </h2>
              <h4 className="text-xs">Bacola Weekend Discount</h4>
              <button className="mt-2 px-4 py-1.5 bg-sky-800 text-white text-xs rounded-full hover:bg-sky-600 transition">
                View All
              </button>
            </div>
          </div>

          {/* قائمة التصنيفات */}
          <div className="flex-1 p-4 flex flex-col items-center justify-between">
            <div className="grid grid-cols-2 gap-2 text-center mb-4 text-xs">
              {[
                "Beverages",
                "Biscuits & Snacks",
                "Breads & Bakery",
                "Breakfast & Dairy",
                "Frozen Foods",
                "Fruits & Vegetables",
                "Grocery & Staples",
                "Household Needs",
                "Meats & Seafood",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-2 py-1 hover:text-teal-600 cursor-pointer transition"
                >
                  {item}
                </div>
              ))}
            </div>
            <button className="mb-3 self-start text-xs px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-200 transition">
              View All →
            </button>
          </div>
        </div>

        {/* ✅ المنتجات */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((_, i) => (
            <div
              key={i}
              className="border p-3 shadow-sm hover:shadow-md transition bg-white rounded-md"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/200/200?random=${i + 1}`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-32 object-contain"
                />
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded">
                  {products.title}%
                </span>
              </div>

              <h3 className="text-xs font-medium mt-3">
                Product {i + 1} Name Example
              </h3>
              <p className="text-green-600 text-[10px] font-semibold mt-2">
                IN STOCK
              </p>
              <p className="text-gray-500 text-[10px] mt-1">
                <span className="text-yellow-400">★ ★ ★ ★ ☆</span> {i + 1} review
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="line-through text-gray-400 text-xs">
                  ${(10 + i) * 2}.00
                </span>
                <span className="text-red-500 font-bold text-sm">
                  ${(10 + i) * 1.5}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// 👇 سكشن فيه 3 صور متساوية (ريسپونسيف)
function ThreeImagesSection() {
  return (
    <section className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-8">
      <div
        className="
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {[1, 2, 3].map((num) => (
          <div key={num} className="relative rounded-md overflow-hidden shadow">
            {/* ✅ الصورة */}
            <img
              src={`https://picsum.photos/400/300?random=${num}`}
              alt={`Promo ${num}`}
              className="w-full h-60 md:h-72 object-cover"
            />

            {/* ✅ الكونتنت فوق الصورة */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 space-y-2 md:space-y-3 text-white">
              <h4 className="text-sm md:text-base text-teal-400">
                Weekend Discount 40%
              </h4>

              <h2 className="text-lg md:text-xl font-bold leading-snug">
                Natural Eggs
                <br />
                the best
              </h2>

              <h4 className="text-xs md:text-sm text-gray-200">
              Eat one every day
              </h4>

              <button
                className="
                  mt-2 px-4 py-2
                  bg-gray-600 hover:bg-gray-700
                  text-white rounded-full
                  text-xs md:text-sm
                  transition
                "
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function BannerWithCardsSimple() {
  const cards = Array.from({ length: 8 });

  return (
    <section className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 🔹 البانر */}
        <div className="lg:w-1/4 w-full flex flex-col items-center bg-white shadow rounded-md p-3">
          <img
            src="https://picsum.photos/400/600"
            alt="Banner"
            className="w-full h-64 object-cover rounded-t-md"
          />
          <h2 className="text-lg font-bold p-2 text-center">Special Banner</h2>
          <h4 className="block text-xs md:text-sm text-gray-400 pt-2 text-center">
            Only this week
          </h4>
        </div>

        {/* 🔹 الكروت */}
        <div
          className="
            lg:w-3/4 w-full
            rounded-md
            bg-gray-50
            grid gap-4
            grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          "
        >
          {cards.map((_, i) => (
            <div
              key={i}
              className="flex items-center bg-gray-50 p-3 shadow hover:shadow-md transition rounded-md"
            >
              {/* ✅ الصورة يسار */}
              <img
                src={`https://picsum.photos/100/100?random=${i + 1}`}
                alt={`Card ${i + 1}`}
                className="w-20 h-20 object-cover mr-3 rounded-md"
              />
              {/* ✅ النص يمين */}
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800">
                  Card Title {i + 1}
                </h3>
                <h4 className="block text-xs md:text-sm text-gray-400 pt-2">
                  Only this week
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default HomePage;

