import React from 'react'
// import BlogPosts from '../components/BlogPosts'
// Images.............
// import img1 from "../assets/img-article-1.png";
// import img2 from "../assets/img-article-2.png";
import Sidebar from '../components/Sidebar';
import PaginationComponent from '../components/PaginationComponent';

//page...
// ال هحط فيها ال components..........................
function Blog() {
    return (
        <>
        <header className='header'></header>
        <div className='main-section'>
            {/* Grid */}
            <div className='container-blog mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Posts ......................*/}
                
                <div className='blog-posts lg:col-span-2 space-y-8'>
                     {/* paginationComponent .................... */}
                <div className=' lg:col-span-2 space-y-8'>
                    <PaginationComponent />
                </div>
            
                </div>
                {/* SideBar........................ */}
                <div className='space-y-4'>
                    <Sidebar />
                </div>
                </div>

            
            </div>

        </>
    )
}

export default Blog
