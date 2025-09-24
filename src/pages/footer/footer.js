import React, { useState } from "react"; 
import "./footer.css";
import { saveEmailToFirebase } from "../../components/saveEmail";

function Footer(){
      const [email, setEmail] = useState(""); 
      const handleSubscribe = () => {
        if (email) {               
          saveEmailToFirebase(email); 
          setEmail("");             
        }
      };
    
     return(
          <div className="mt-40  footer-sec">

                                {/* GREEN PART (Newsletter) */}

             <div className="part1-footer flex items-center justify-evenly">
               <div className="text-foot-1">                       {/* left part - text & subscribe box */}    
                    <p className=" text-gray-100 text-sm"> <u>30% discount</u> for your first order</p>
                    <h2 className="text-white py-4 font-bold text-2xl">Join Our Newsletter and Get ...</h2>
                    <p className="text-xs text-gray-300 leading-5">join our email subscription now <br></br> to get update on promotions and coupons.</p>
                    <div className="subscribe-box w-[400px] h-[50px] bg-white mt-6 rounded-md p-1  flex justify-between">
                         <div>
                              <span className="text-gray-400 px-2"><i className="fa-solid fa-envelope"></i></span>
                              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Your Email Address" className="border-none outline-none h-full"></input>
                         </div>
                         <button onClick={handleSubscribe} className="text-white bg-[#35AFA0] p-2 rounded-md">Subscribe</button>
                    </div>
               </div>
               <img src="/images/discount-ticket.png" alt="discount" className="h-[270px] w-[400px]"></img>    {/* img discount */}
            </div> 
                                              {/* Icons with text  */}
            <div className="part2-footer py-9 flex justify-center text-xs text-gray-800 bg-gray-200 ">
               <span> <i className="fa-solid fa-glass-water"></i> Everyday fresh products</span>
               <span className="inline-block h-6 w-px bg-gray-400 mx-11 line"></span>
               <span><i className="fa-solid fa-truck-fast"></i> free delivery for order over 80$</span>
               <span className="inline-block h-6 w-px bg-gray-400 mx-11 line"></span>
               <span><i className="fa-solid fa-tags"></i> Daily Mega discounts</span>
               <span className="inline-block h-6 w-px bg-gray-400 mx-11 line"></span>
               <span><i className="fa-solid fa-sack-dollar"></i> Best price on the market</span>
            </div> <hr className="border-t border-gray-400"></hr>
                                            {/* Multi-column Footer */}
             <div className="px-4  py-20 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8  bg-gray-200 flex justify-center">
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-12 row-gap-10 lg:col-span-4 md:grid-cols-5 bg-gray-200">
                    <div>
                      <p className="text-sm tracking-wide text-gray-800 font-bold">FRUIT & VEGETABLES</p>
                      <ul className="mt-2 space-y-2 text-xs">
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Fresh Vegetables </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Herbs & Seasonings </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Fresh Fruits </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Cuts & Sprouts </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Exotic Fruits & Veggies </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> packaged Produce </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Party Trays </a></li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-gray-800 font-bold">BREAKFAST & DAIRY</p>
                      <ul className="mt-2 space-y-2 text-xs">
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Milk & Flavoured Milk </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Butter & Margarine </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Cheese </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Eggs Substitutes </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Honey </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Marmalades </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Sour Creem & Dips </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Yogurt </a></li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-gray-800 font-bold">MEAT & SEAFOOD</p>
                      <ul className="mt-2 space-y-2 text-xs">
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Breakfast Sausage</a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Dinner Sausage </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Beef </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">  Chicken </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Sliced Deli Meat </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Shrimp </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Wild Caught Fillets </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Crab & Shellfish </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Farm Raised Fillets </a></li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-gray-800 font-bold">BEVERAGES</p>
                      <ul className="mt-2 space-y-2 text-xs">
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Water</a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Sparkling Water </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Soda & Pop </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">  Coffee </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Milk & Plant-Based Milk </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Tea & Kombucha </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Drink Boxes & Pouches </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Craft Beer </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Wine </a></li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm tracking-wide text-gray-800 font-bold">BREAKFAST & DAIRY</p>
                      <ul className="mt-2 space-y-2 text-xs">
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Milk & Flavoured Milk </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Butter & Margarine </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Cheese </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Eggs Substitutes </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Honey </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Marmalades </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Sour Creem & Dips </a></li>
                        <li><a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"> Yogurt </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                                              {/* work time & btns for download  */}
              <div className="last-details-1 w-full h-20 px-28  flex justify-between items-center"> 
                <div className="left-foot-p1 flex items-center gap-3">
                  <span className="inline-block w-[35px] h-[35px] rounded-full border border-gray-400 text-center leading-[35px]"><i className="fa-solid fa-phone-volume"></i></span>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xl">8 800 555-55</h3>
                    <p className="text-gray-500 text-xs">working 8:00 - 22:00</p>
                  </div>
                </div>

                <div className="right-foot-p1 flex items-center gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xs">Download App On Mobile :</h3>
                    <p className="text-gray-500 text-[10px]">15% discount on your first purchase</p>
                  </div>
                  <img src="/images/google-play-btn.jpg" className="w-[100px] h-[30px] rounded-md"></img>
                  <img src="/images/app-store-btn.jpeg"  className="w-[100px] h-[30px] rounded-md"></img>
                  <div className="flex gap-1">
                    <span className="inline-block w-[25px] h-[25px] rounded-full border border-gray-400 text-center leading-[22px] text-[#35AFA0] text-sm"><i className="fa-brands fa-facebook-f"></i></span>
                    <span className="inline-block w-[25px] h-[25px] rounded-full border border-gray-400 text-center leading-[22px] text-[#35AFA0] text-sm"><i className="fa-brands fa-twitter"></i></span>
                    <span className="inline-block w-[25px] h-[25px] rounded-full border border-gray-400 text-center leading-[22px] text-[#35AFA0] text-sm"><i className="fa-brands fa-instagram"></i></span>
                  </div>
                </div>
              </div> <hr></hr>
                                               {/* Rights &  Ways to Pay  */}
              <div className="last-details-2 w-full h-14 px-28  flex justify-between items-center"> 
                <div className="left-foot-p1 flex items-center">
                  <p className="text-gray-400 text-xs">Copyright 2025 &copy; All rights reserved by blackrise Theme</p>
                </div>
                <div className="right-foot-p1 flex items-center gap-2">
                  <a href="#" className="text-gray-400 text-xs" >Privacy Police</a>
                  <a href="#" className="text-gray-400 text-xs" >Terms and Conditions</a>
                  <a href="#" className="text-gray-400 text-xs" >Cookie</a>
                  <div className="flex">
                    <img src="/images/barcode.jpeg"  className="w-[50px] h-[20px] rounded-md"></img>
                    <img src="/images/visa.jpeg"  className="w-[50px] h-[20px] rounded-md"></img>
                    <img src="/images/mastercard.jpeg"  className="w-[50px] h-[20px] rounded-md"></img>
                    <img src="/images/paypai.jpeg"  className="w-[50px] h-[20px] rounded-md"></img>
                  </div>
                </div>
              </div>
              
          </div>
     )
}

export default Footer; 



