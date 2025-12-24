import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";
import { IoTime } from "react-icons/io5";
import Sidebar from './Sidebar';
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";

import { Blogs } from '../../../public/Blogs.js'
import {motion} from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion.js';
import BannerCard from '../BannerCard.jsx';

const BlogDetail = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(useParams())
    const { id } = useParams();
    // console.log('id' , id)

    // const blogHandling = async () => {
    //     setLoading(true)
    //     try {
    //         const response = await axios.get('http://localhost:5000/blogs')
    //         // console.log(response.data)
    //         setBlogs(response.data || []);
    //     } catch (err) {
    //         console.error('Failed to load blogs', err)
    //         setBlogs([])
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // console.log('blogs', blogs[id])

    // If your route `id` is the blog object's id (number/string), prefer a find().
    // If the route passes an index you can fall back to numeric index access.
    const foundById = Blogs.find((b) => String(b.id) === String(id));
    const blog = foundById || Blogs[Number(id)];
    // console.log(blog.author)

    // useEffect(function () {
    //     blogHandling()
    // }, [])


    const navigate = useNavigate();

    const url = 'https://images.unsplash.com/photo-1719885159993-8df724026d4b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <>
        <BannerCard url = {url} page = 'Blog Details'></BannerCard>
        <div className='max-w-7xl px-4 py-8 mx-auto'>
            <div className='flex justify-between gap-2'>
                <div className='w-full lg:w-8/11 bg-white shadow'>
                    {/* guard against missing blog while data loads */}
                    {/* <img src={blog?.image} alt={blog?.title || 'Blog image'} /> */}
                    <motion.img
                    variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                    src={blog?.image} className='w-full h-80 sm:h-96 md:h-112 py-4 object-cover rounded px-4'></motion.img>
                    <motion.h2
                    variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                    className='px-4 text-xl  sm:text-2xl font-medium text-gray-800'>{blog?.title}</motion.h2>

                    <motion.div
                    variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                    className='px-4 mt-4 flex items-center gap-2 font-bold text-gray-800 sm:text-lg'>
                        <FcBusinessman />
                        <p>{blog?.author}</p>
                        <p>{blog?.published_date}</p>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                    className='mt-1 flex items-center gap-2 px-4 text-gray-700 sm:text-[17px]'>
                        <IoTime />
                        <p>{blog?.reading_time}</p>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                    className='sm:text-[18px] md:text-[19px] lg:text-md xl:text-[18px] leading-relaxed tracking-wide pb-4 px-4 mt-4'>
                        <p>{blog?.content}</p><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto perspiciatis facere repudiandae illo quia aperiam doloribus, eos quaerat omnis? Ut tempore nostrum, velit consequuntur voluptates ex id obcaecati omnis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium non a impedit praesentium cum dolores fuga ipsa aperiam delectus. Dolore, enim cupiditate voluptatibus quo vero harum facilis vitae, necessitatibus voluptate veritatis tempore distinctio, tenetur sit delectus eius? Est dolorum obcaecati minus provident animi quas perferendis fuga vero, ullam numquam ipsum officia sint, autem dolore quaerat et quod, placeat inventore suscipit? Quia, praesentium harum. Quos accusantium quidem distinctio magnam quasi ut laboriosam esse fuga eveniet debitis exercitationem atque enim magni, officiis quae repellendus illo sed, fugit earum explicabo necessitatibus est. Ea quas aliquam earum ad! Ea maxime odio reiciendis ipsum?</p>
                    </motion.div>
                </div>
                <div className={`w-3/11 hidden lg:block`}>
                    <Sidebar blog={Blogs}></Sidebar>
                </div>
            </div>

            <div className={`w-full block lg:hidden`}>
                <Sidebar blog={Blogs}></Sidebar>
            </div>

            <div className='flex items-center justify-between px-4 mt-2'>
                <motion.button
                variants={fadeIn('right', 0.2)}
                            initial = {'hidden'}
                            whileInView={'show'}
                            viewport={defaultViewport}
                onClick={() => {
                    console.log('clicked')
                    navigate(-1)
                }} className='flex items-center gap-1 text-orange-700 font-bold cursor-pointer'>
                    <FaArrowLeft className='mt-1' />
                    <p className=''>Go to Prev</p>
                </motion.button>

                <motion.button
                variants={fadeIn('left', 0.2)}
                            initial = {'hidden'}
                            whileInView={'show'}
                            viewport={defaultViewport}
                onClick={() => {
                    console.log('clicked')
                    navigate('/blogs')
                }} className='flex items-center gap-1 px-4 text-orange-700 font-bold cursor-pointer'>
                    <p className=''>Go to Blogs</p>
                    <FaArrowRight  className='mt-1' />
                </motion.button>
            </div>
        </div>
        </>
    );
};

export default BlogDetail;