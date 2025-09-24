import React from 'react'
import { IoCartOutline, IoPricetagOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCardDetails from '../components/ProductCardDetails'
import { useProductsDetails } from '../context/ProductDetailsContext';
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

// Custom arrow components for the slider
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} flex items-center justify-center p-2 rounded-full shadow-md cursor-pointer z-10`}
      style={{ ...style, display: "flex", right: "0" ,opacity: "1 !important" }}
      onClick={onClick}
    >
      <IoChevronForward className="text-gray-600 text-2xl" />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} flex items-center justify-center p-2 rounded-full shadow-md cursor-pointer z-10`}
      style={{ ...style, display: "flex", left: "0" }}
      onClick={onClick}
    >
      <IoChevronBack className="text-gray-600 text-2xl" />
    </div>
  );
};

const ProductDetailsPage = () => {

    const {
        currentImg,
        setCurrentImg,
        activeSize,
        setActiveSize,
        quantity,
        setQuantity,
        isExpanded,
        setIsExpanded,
        productImages,
        sizes,
        fullText,
        truncatedText
    } = useProductsDetails();


    // Dummy data for products. You would fetch this from an API in a real application.
    const products = [
        {
            id: 1,
            image: productImages[0],
            name: "Fresh Green Leaf Lettuce",
            onSale: true,
            price: { new: "$2.64", old: "$2.74" },
            unit: "1 each"
        },
        {
            id: 2,
            image: productImages[1],
            name: "Leafy Romaine Mixed Lettuce",
            onSale: true,
            price: { new: "$2.50", old: "$2.74" },
            unit: "1 each"
        },
        {
            id: 3,
            image: productImages[2],
            name: "Fresh Express Iceberg Garden Salad Blend",
            onSale: false,
            price: { new: "$25.00 - $40.00", old: null },
            unit: "1 Bag"
        },
        {
            id: 4,
            image: productImages[3],
            name: "Organic Girl Lettuce",
            onSale: false,
            price: { new: "$1.50", old: null },
            unit: "1 Bag"
        },
        {
            id: 5,
            image: productImages[1],
            name: "Organic Spring Mix",
            onSale: true,
            price: { new: "$2.60", old: "$3.00" },
            unit: "1 each"
        },
        {
            id: 6,
            image: productImages[2],
            name: "Organic Firm Lettuce",
            onSale: false,
            price: { new: "$3.00 - $5.00", old: null },
            unit: "1 each"
        },
    ];
    const tags = ['Fast Food', 'Organic Corn', 'Flavoured', 'Dry Food']

    const getSliderSettings = () => {
        const width = window.innerWidth;

        let slidesToShow = 5;
        if (width <= 480) slidesToShow = 2;
        else if (width <= 600) slidesToShow = 4;
        else if (width <= 1024) slidesToShow = 5;

        return {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024, // For laptops and smaller desktops
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600, // For tablets
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480, // For mobile phones
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    };
    const settings = getSliderSettings();

    return (


        <div className="flex flex-col">
            <div className="pt-2 md:pt-2 h-1/2">
                {/* Main Product Section: Images and Details */}
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    {/* Image Gallery Container */}
                    <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start w-full md:w-1/2">
                        {/* Images Group (Thumbnails) */}
                        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto flex-shrink-0">
                            {productImages.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    onClick={() => setCurrentImg(index)}
                                    className={`w-16 h-16 rounded-md cursor-pointer flex-shrink-0
                                ${currentImg === index ? 'border-[0.25px] border-[#35AFA0]' : ''}`}
                                />
                            ))}
                        </div>
                        {/* Active Image */}
                        <div className="w-full">
                            <img src={productImages[currentImg]} className="w-full rounded-md" alt="" />
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="pl-0 md:pl-4 w-full md:w-1/2">
                        <div className="flex flex-col">
                            <h1 className="text-l md:text-l font-bold mb-2">
                                SkinnyPop Popcorn SkinnyPack <span className="block">Original</span>
                            </h1>
                            <p className="text-l md:text-l font-bold text-gray-800">$15.00 - $25.00</p>
                        </div>

                        <div className="gap-2 my-2 mb-2">
                            <p className="text-gray-600 mr-2 mb-2">Available in:</p>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setActiveSize(size)}
                                        className={`px-2 py-2 border rounded-sm text-sm font-medium transition-colors duration-200
                                    ${activeSize === size ? 'bg-[#35AFA0] text-white' : 'border-gray-300 text-black hover:bg-gray-100'}`}
                                    >
                                        <span
                                            className={`inline-block w-2 h-2 rounded-full mr-2 ${activeSize === size ? 'bg-white' : 'bg-black'}`}
                                        ></span>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center my-4">
                            <div className="flex items-center justify-between rounded-sm p-1 w-full bg-gray-100 mb-3">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-3 py-1 text-xl md:text-2xl font-light text-gray-700"
                                >
                                    −
                                </button>
                                <span className="text-lg md:text-xl font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-3 py-1 text-xl md:text-2xl font-light text-gray-700"
                                >
                                    +
                                </button>
                            </div>

                            <button className="flex items-center justify-center space-x-2 px-6 py-3 w-full rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors duration-200">
                                <IoCartOutline size={30} />
                                <span>Add to Cart</span>
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between gap-4 my-2">
                            <button className="flex w-full md:w-[50%] items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100">
                                <FaRegHeart size={20} />
                                <span>Wishlist</span>
                            </button>
                            <button className="flex w-full md:w-[50%] items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100">
                                <FaShare size={20} />
                                <span>Share</span>
                            </button>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className='flex items-center gap-2'>
                                <IoPricetagOutline size={20} className="text-gray-500" />
                                <span className="text-gray-500 font-semibold flex  ">
                                    Tags:
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 text-gray-500 rounded-sm text-sm font-medium border border-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="my-4 ">
                            <h2 className="text-lg md:text-xl font-bold mb-2">Product Details:</h2>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {isExpanded ? fullText : `${truncatedText}...`}
                                {!isExpanded && (
                                    <a href="#"
                                        onClick={(e) => { e.preventDefault(); setIsExpanded(true); }}
                                        className="text-teal-500 hover:underline ml-1"
                                    >
                                        Read More
                                    </a>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Related products section - No changes needed, as it is already well-structured */}
            <div className="relative overflow-hidden ">
                <div className="relative w-full">
                    <h2 className="text-2xl font-bold text-gray-800">Related products</h2>
                    {/* إزالة الفئات المتعارضة من هذا الـ div */}
                    <div className="gap-4 scrollbar-hide">
                        {/* هنا المشكلة. لا يجب أن يكون هناك div بين العنوان و الـ Slider */}
                        <Slider {...settings}>
                            {products.map(product => (
                                <ProductCardDetails key={product.id} product={product} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetailsPage
