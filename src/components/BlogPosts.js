import React from 'react'

// 2 article ....
function BlogPosts({ image, name , title, author, date, desc }) {
    return (
        // Posts......................
        <div className="border-b pb-6">
                <img src={image} alt={title} className="rounded-lg mb-4 w-full " />
                <p className="text-sm font-medium  text-gray-500 mb-2">{name}</p>
                <h2 className="text-4xl font-bold mb-2 ">{title}</h2>
                <p className="text-sm font-medium text-gray-500 mb-2">{date}  <span className='text-gray-800 ms-3'>{author}</span></p>
                <p className="text-gray-600">{desc}</p>
        </div>
        
    )
}

export default BlogPosts
