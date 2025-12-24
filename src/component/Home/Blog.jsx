import React from 'react';
import { Blogs } from '../../../public/Blogs';
import Card from '../Blog/Card';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight  } from "react-icons/fa6";
const blog = Blogs.slice(0, 6);

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white'>
      <div className='max-w-7xl px-4 py-8 mx-auto'>
        <motion.h2
        variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={defaultViewport}
        className='-mt-5 text-2xl md:text-4xl font-bold text-center text-orange-600'>Our Blogs</motion.h2>
        {/* Blogs part */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-2 xl:gap-2 px-0 lg:px-2'>
          {blog.map((item, idx) => (
            <motion.div
              variants={fadeIn('up', '.25')}
              initial={'hidden'}
              whileInView={'show'}
              viewport={defaultViewport}
              key={idx}>
              <Card item={item} ></Card>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col items-end mt-2'>
          <motion.button
            variants={fadeIn('left', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={defaultViewport}
            onClick={() => {
              console.log('clicked')
              navigate('/blogs')
            }} className='flex items-center gap-1 px-4 text-orange-700 font-bold cursor-pointer'>
            <p className=''>See All</p>
            <FaArrowRight className='mt-1' />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Blog;