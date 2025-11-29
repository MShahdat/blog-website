import React, { useState } from 'react';
import { FcBusinessman } from "react-icons/fc";
import {Link} from 'react-router-dom'

const BlogCard = (props) => {
    // console.log(props.blog)
    const blog = props.blog;
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2 xl:gap-2 px-0 lg:px-2'>
            {
                blog.map((item, idx) => {
                    return (
                        <Link key={idx} to={`/blog/${item.id}`} className='relative hover:scale-103 duration-500 transform px-2 py-2 bg-white shadow-2xl rounded h-92 cursor-pointer'>
                            <img src={item.image} className='hover:scale-102 duration-500 transform w-full h-52 object-cover'></img>
                            <div className='text-lg mt-4 leading-normal font-semibold line-clamp-2 text-gray-800 px-1'>{item.title}</div>
                            <div className='absolute bottom-4 left-3'>
                                <div className='mt-4 flex gap-1 items-center'>
                                    <FcBusinessman />
                                    <p className=' font-medium text-md text-gray-700'>{item.author}</p>
                                </div>
                                <p className='mt-1 text-sm text-gray-500'>Published: {item.published_date}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default BlogCard;