import React from 'react'

import img5 from '../assets/img-article-4.png'
function AdBanner() {
    return (
        <div>
            <h3 className='font-semibold text-lg mb-4 uppercase mt-10 '>
                widget banner
            </h3>
            <img src={img5} className='w-full'  />
        </div>
        
    )
}

export default AdBanner
