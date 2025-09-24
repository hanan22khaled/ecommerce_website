import Checkout from "../components/Checkout";
// Import images individually
import img1 from "../assets/img1.png";
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import { useCheckout } from '../context/CheckoutContext';
// Create a mapping object for your images
const imageMap = {
    '../../assets/images/img1.png': img1,
    '../../assets/images/img2.png': img2,
    '../../assets/images/img3.png': img3
};

const CheckoutPage = () => {
    // Access the items and summary from the imported data


    const { cartItems, subtotal, total ,taxes } = useCheckout();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


    return (
        <div className='flex flex-col lg:flex-row justify-center mt-32'>
            
            
          
               <Checkout/>
            


            <div className="border-t-2 lg:border-l-2 lg:border-t-0 border-gray-300">
                <div className='mt-14 m-5 lg:ml-16'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex flex-row  mb-4 items-center' >
                            <div className='relative'>
                                <img className='w-23 h-20 border-1 border-gray-300 shadow-sm rounded-lg' src={imageMap[item.imagePath]} alt={item.name} />
                                <div className='absolute -top-2 -right-2 p-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs'>
                                    {item.quantity}
                                </div>
                            </div>
                            <div className='flex flex-row w-full ml-6 justify-between items-center'>
                                <h4 className='mr-32'>{item.name}</h4>
                                <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className='mt-12'>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='flex flex-row'>
                                <h4 className='mr-3 font-semibold'>Subtotal </h4>
                                <p> {totalItems} Items</p>
                            </div>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <div className='flex flex-row w-full mt-4 justify-between'>
                            <div className='flex flex-row'>
                                <h4 className='mr-3 font-semibold'>Shipping </h4>
                            </div>
                            <p>Free</p>
                        </div>
                        <div className='flex flex-row w-full mt-10 justify-between'>
                            <div className='flex flex-row'>
                                <h4 className='mr-3 text-2xl font-bold'>Total </h4>
                            </div>
                           <div className='flex flex-row items-end'>
                             <p className='text-[16px] text-gray-500 font-semibold mr-3'>USD</p>
                             <p className='text-2xl font-bold'>${total.toFixed(2)}</p>
                           </div>
                        </div>
                        <p className='text-[16px] text-gray-500 font-semibold mt-6'>Including ${taxes.toFixed(2)} in taxes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;