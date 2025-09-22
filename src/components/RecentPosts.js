import React from 'react'

import img1 from "../assets/img-article-1.png";
import img2 from "../assets/img-article-2.png";
import img3 from "../assets/img-article-3.png";

function RecentPosts() {
    const posts = [
        {
            id :1 ,
            title : "But I must explain to you how all this mistaken idea" ,
            image : img1
        },
        {
            id: 2,
            title: "The Problem With Typefaces on the Web",
            image:img2
        } ,
        {
            id: 3,
            title: "English Breakfast Tea With Tasty Donut Desserts",
            image: img3
        },
    ]
    return (
        <div> 
            <h3 className='font-semibold text-lg mb-4 uppercase '>
                Recent Posts
            </h3>
            <div className='border space-y-4 shadow-xl p-6 rounded-lg '>

                {posts.map( (item , index) =>(
                    <div key={item.id} className='flex items-center gap-3'>

                        <div className='relative'>
                            <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full object-cover"/>
                            <span className="absolute top-1 -right-0  bg-teal-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center border border-spacing-14">
                                {index + 1}
                            </span>

                        </div>
                            <p className="text-xl text-gray-700 hover:text-teal-500 cursor-pointer w-2/3">
                            {item.title}
                    </p>

                    </div>

                ))}

            </div>

        </div>
        
    )
}

export default RecentPosts
