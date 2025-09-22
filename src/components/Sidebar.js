import React from 'react'
import RecentPosts from './RecentPosts'
import SocialLinks from './SocialLinks'
import AdBanner from './AdBanner'
import Tags from './Tags'

function Sidebar() {
    return (
        <div>
                    {/* Recent Posts */}
                        <RecentPosts />

                    {/* Social Media  */}
                        <SocialLinks />

                    {/* AdBanner */}
                        <AdBanner />

                    {/* Tags */}
                        <Tags />
        </div>
        
    )
}

export default Sidebar
