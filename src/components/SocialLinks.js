import React from 'react'
import { FaFacebookF , FaInstagram  } from "react-icons/fa";
import { FaXTwitter  ,FaPinterestP } from "react-icons/fa6";
import { FcReddit } from "react-icons/fc";

function SocialLinks() {
    return (
        <div>
            <h3 className='font-semibold text-lg mb-4 uppercase mt-10 '>
                social media
            </h3>
        <div className="flex flex-col gap-3">
                    
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#3b5998] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-12 text-center hover:opacity-90" >
                    <FaFacebookF  size={20}/>Facebook
                    </a>
                    
                    <a
                    href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-12 text-center hover:opacity-90"
                    >
                    <FaInstagram size={20} />
                    Instagram
                    </a>
                    <a
                    href="https://www.x.com"  target="_blank" rel="noopener noreferrer"
                    className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-12 text-center hover:opacity-90"
                    >
                    <FaXTwitter size ={20}/>   
                    Twitter
                    </a>
                    <a
                    href="https://www.reddit.com"  target="_blank" rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-12 text-center hover:opacity-90"
                    >
                        <FcReddit size ={20}/>

                    Reddit
                    </a>
                    <a
                    href="https://www.pinterest.com"  target="_blank" rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-12 text-center hover:opacity-90"
                    >
                    <FaPinterestP size={20} />
                    Pinterest
                    </a>
    </div>

            
        </div>
        
    )
}

export default SocialLinks
