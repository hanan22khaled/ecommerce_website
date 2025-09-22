import React from 'react'
import { useState } from 'react';

// Data Content...................
import blogData from "../data/dataBlog"
// From Material UI ...............
import Pagination from '@mui/material/Pagination';
import BlogPosts from './BlogPosts';
const pageSize = 2
  function PaginationComponent() {
  
            // SLICE()
            const [pagination , setPagination ]=useState({
                from :  0,
                to : pageSize ,
            })
          function handlePagination(event , page){
            const from = (page - 1) * pageSize
            const to = (page - 1) * pageSize + pageSize
            setPagination({...pagination , from , to})
        
        }
            return (  
            <>
                    {/*  changed content   */}
                    <div>
                        {
                            // data.slice(pagination.from , pagination.to).map( ( item , index) =>
                            //     <h1 key={item.id}> {item.title} </h1>
                            // )
                            blogData.slice(pagination.from, pagination.to).map((item) => (
                            <BlogPosts
                              key={item.id}
                              image={item.image}
                              name={item.name}
                              title={item.title}
                              author={item.author}
                              date={item.date}
                              desc={item.desc}
                            />
                          ))
        
                        }
                    </div>
                    {/* UI Pagination ..... */}
                    <Pagination 
                    onChange={handlePagination} 
                    
                    count={Math.ceil(blogData.length / pageSize)}
                      sx={{
                            "& .MuiPaginationItem-root": {
                              color: "#0f766e", 
                            },
                            "& .MuiPaginationItem-root.Mui-selected": {
                              backgroundColor: "#1de9b6", // teal
                              color: "#ffffff", 
                            },
                            "& .MuiPaginationItem-root:hover": {
                              backgroundColor: "#1de9b6",
                              color: "#ffffff",
                            },

  }}
                    
                    />
                
            </>
    
    )
}

export default PaginationComponent
