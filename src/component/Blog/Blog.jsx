import React, { useEffect, useState } from 'react';
import axios from 'axios'
import BlogCard from './BlogCard';
import ReactPaginate from 'react-paginate';
import Category from './Category';
import Sidebar from './Sidebar';

import { Blogs } from '../../../public/Blogs.js';
import Card from './Card.jsx';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion.js';


const Blog = () => {

    console.log('imported data', Blogs)

    const [allBlog, setAllBlog] = useState([]);
    const [blog, setBlog] = useState([]);
    const [index, setIndex] = useState(1);
    const [category, setCategory] = useState(null);
    const [totalPage, setTotalPage] = useState(1);
    let count = 15;


    // const blogHandling = async () => {
    //     const response = await axios.get('http://localhost:5000/blogs')
    //     // console.log('api data', response.data)
    //     setAllBlog(response.data);
    // }

    // useEffect(function () {
    //     blogHandling()
    // }, [])


    useEffect(() => {
        // let filtered = allBlog;
        let filtered = Blogs;

        if (category) {
            filtered = Blogs.filter(item => item.category === category)
        }
        setTotalPage(Math.ceil(filtered.length / count));

        const start = (index - 1) * count;
        const end = (start + count);

        setBlog(filtered.slice(start, end))
    }, [allBlog, category, index])


    const handleChange = (blog) => {
        console.log(blog.selected + 1)
        setIndex(blog.selected + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleCategory = (cat) => {
        setCategory(cat);
        setIndex(1)
    }

    return (
        <div className=' px-4 max-w-7xl py-12 mx-auto'>
            {/* <div className='lg:hidden'>
                <Sidebar blog = {allBlog}></Sidebar>
            </div> */}
            <motion.div
                variants={fadeIn('up', '.1')}
                initial={'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
            >
                <Category blog={Blogs} onSelect={handleCategory} active={category}>
                </Category>
            </motion.div>

            <p className='mt-0'></p>

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

            {/* <div className='flex gap-1'>
                <div className='w-full'>
                    <BlogCard blog={blog}></BlogCard>
                </div>
                <div className='w-3/11 hidden lg:block'>
                    <Sidebar blog = {allBlog}></Sidebar>
                </div>
            </div> */}


            <motion.div
                variants={fadeIn('up', '.25')}
                initial={'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
            >
                {totalPage > 1 ? (
                    <ReactPaginate
                        previousLabel='Pre'
                        nextLabel='Next'
                        breakLabel='...'

                        pageCount={totalPage}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}

                        onPageChange={handleChange}
                        forcePage={index - 1}

                        containerClassName="mt-8 pb-10 flex item-center justify-center gap-1 sm:gap-2 lg:gap-2 text-sm sm:text-sm lg:text-md font-medium"

                        pageClassName="border px-2 sm:px-3 py-1 rounded "
                        pageLinkClassName="cursor-pointer"

                        previousClassName="border px-2 sm:px-3 py-1 rounded "
                        previousLinkClassName="cursor-pointer"

                        nextClassName="border px-2 sm:px-3 py-1 rounded"
                        nextLinkClassName="cursor-pointer"

                        breakClassName="px-3 py-1"
                        breakLinkClassName="cursor-pointer"

                        activeClassName="bg-orange-600 text-white"
                        disabledClassName='opacity-0 cursor-not-allowed'
                    ></ReactPaginate>
                ) : null}
            </motion.div>
        </div>
    );
};

export default Blog;