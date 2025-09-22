import React from 'react'

function Tags() {
      const tags = ["ecommerce" , "food" , "grocery" , "klbtheme" , "organic" , "shop" , "shopify" , "store"];
    return (
        <div>
             <h3 className='font-semibold text-lg mb-4 uppercase mt-10 '>
                tags
            </h3>
            <div className='flex flex-wrap gap-2 w-2/3'>
                {tags.map( (item , index) =>(
                    <span key={index} className='border bg-gray-50 text-lg p-2 rounded-md cursor-pointer hover:opacity-70 transition-opacity'>{item}</span>
                ))}





            </div>

            
        </div>
        
    )
}

export default Tags
