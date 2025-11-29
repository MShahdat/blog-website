import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForwardSharp } from "react-icons/io5";
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const Hero = () => {
    return (
        <div className='bg-black text-white'>
            <div className='px-4 py-16 mx-auto relative object-cover ' 
            style={{
                backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
            >
                    <motion.h2
                    variants={fadeIn('up', '.2')}
                    initial = {'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}

                className='text-3xl text-center sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-100 font-serif'>Welcome to our Blog</motion.h2>

                <motion.p
                variants={fadeIn('up', '.4')}
                    initial = {'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}

                className='text-md mt-4 sm:text-md xl:text-lg w-full sm:w-4/5 md:w-3/5 text-center mx-auto text-gray-200 font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ullam minima cupiditate veniam placeat neque nostrum rem voluptatem officiis! Dignissimos modi sed quod illo magnam itaque in impedit rerum quaerat.</motion.p>


                <motion.div
                variants={fadeIn('up', '.6')}
                    initial = {'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <Link to={'/blogs'} className=' flex gap-1 items-center mt-6 font-bold justify-center text-orange-500'>
                    <p className='text-lg'>Learn more</p>
                    <IoArrowForwardSharp className='text-xl mt-0.5'/>
                </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;