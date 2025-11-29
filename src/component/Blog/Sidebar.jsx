import React from 'react';
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';


const Sidebar = (props) => {
    // console.log(props.blog)

    const sli = props.blog.length;
    // console.log(sli)
    const lBlog = props.blog.slice(sli - 7, sli - 4);
    const pBlog = props.blog.slice(sli - 4, sli)
    // console.log(lBlog)
    // console.log(pBlog)

    
    return (
        <div className='grid grid-cols-2 lg:grid-cols-1  gap-2 sm:gap-6 lg:gap-0 pb-4 lg:pb-0'>
            <motion.div
            variants={fadeIn('right', 0.3)}
            initial = {'hidden'}
            whileInView={'show'}
            viewport={defaultViewport}
             className='bg-white shadow px-2 rounded'>
                <p className='text-lg md:text-2xl  font-bold text-orange-600 underline mt-2'>Latest Blogs</p>
                {lBlog.map((item, idx) => (
                    <div key={idx}>
                        <p className='mt-4 text-sm sm:text-lg lg:text-[17px] line-clamp-2 text-gray-700'>{item.title}</p>
                        <Link to={`/blog/${item.id}`} className='mt-2 flex items-center text-orange-600 gap-1'>
                            <p className='font-medium text-sm sm:text-lg lg:text-md'>Read More</p>
                            <IoArrowForwardSharp className='mt-1'/>
                        </Link>
                        <p className='border-t-2 mt-1 text-gray-200'></p>
                    </div>
                ))}
            </motion.div>
            <motion.div
            variants={fadeIn('left', 0.3)}
            initial = {'hidden'}
            whileInView={'show'}
            viewport={defaultViewport}
            className='mt-0 lg:mt-10 px-2 bg-white shadow'>
                <p className='mt-2 text-lg md:text-2xl font-bold text-orange-600 underline'>Popular Blogs</p>
                {pBlog.map((item, idx) => (
                    <div key={idx}>
                        <p className='mt-4 text-sm sm:text-lg lg:text-[17px] line-clamp-2 text-gray-700'>{item.title}</p>
                        <Link to={`/blog/${item.id}`} className='mt-2 flex items-center text-orange-600 gap-1'>
                            <p className='font-medium text-sm sm:text-lg lg:text-md'>Read More</p>
                            <IoArrowForwardSharp className='mt-1'/>
                        </Link>
                        <p className='border-t-2 mt-1 text-gray-200'></p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Sidebar;