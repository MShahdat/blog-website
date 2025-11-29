import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../motion/Motion';


const Footer = () => {
    return (
        <div className='bg-[#020120] text-white'>
            <div className='max-w-7xl px-4 py-12 mx-auto'>
                <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8'>
                    <motion.div
                        variants={fadeIn('up', '.2')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                        className=' flex flex-col items-center lg:items-start gap-1'>
                        <h2 className='font-bold pb-2 text-gray-300'>Category</h2>
                        <div className='text-gray-400'>
                            <p>Health</p>
                            <p>Tech</p>
                            <p>Apps</p>
                            <p>Gadgets</p>
                            <p>Security</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', '.3')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                        className='flex flex-col items-center lg:items-start gap-1'>
                        <h2 className='font-bold pb-2 text-gray-300'>Category</h2>
                        <div className='text-gray-400'>
                            <p>Health</p>
                            <p>Tech</p>
                            <p>Apps</p>
                            <p>Gadgets</p>
                            <p>Security</p>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('up', '.4')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                    className='flex flex-col items-center lg:items-start gap-1'>
                        <h2 className='font-bold pb-2 text-gray-300'>Category</h2>
                        <div className='text-gray-400'>
                            <p>Health</p>
                            <p>Tech</p>
                            <p>Apps</p>
                            <p>Gadgets</p>
                            <p>Security</p>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('up', '.5')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                    className='flex flex-col items-center lg:items-start gap-1'>
                        <h2 className='font-bold pb-2 text-gray-300'>Category</h2>
                        <div className='text-gray-400'>
                            <p>Health</p>
                            <p>Tech</p>
                            <p>Apps</p>
                            <p>Gadgets</p>
                            <p>Security</p>
                        </div>
                    </motion.div>

                    <motion.div
                    variants={fadeIn('up', '.6')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                    className='flex flex-col col-span-2 w-full px-8 sm:px-16 lg:px-0'>
                        <h2 className='text-lg font-bold text-gray-300'>Subscrible for updates</h2>
                        <form className='mt-4 flex gap-2'>
                            <input type='email' placeholder='Email...' className='bg-white text-black w-50 sm:w-64 px-4 py-1.5 rounded shadow-2xl outline-none'></input>
                            <button className='bg-orange-700 px-2 lg:px-2  xl:px-4 font-bold text-sm ms:text-md rounded'>Subscribe</button>
                        </form>
                        <p className='mt-4 w-72 text-[16px] text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, doloremque.</p>
                    </motion.div>
                </div>
                <motion.div
                variants={fadeIn('up', '.7')}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h2 className='border-t-2 mt-6 text-gray-600'></h2>
                <div className='mt-2 px-2 text-gray-400 flex flex-col sm:flex-row gap-2 items-center justify-between'>
                    <div className='text-sm'>© Copyright 2025 Lorem inc. All rights reserved</div>
                    <div className='flex items-center gap-4'>
                        <a href='https://www.facebook.com/'><BsFacebook className='size-4 ' /></a>
                        <a href='https://www.instagram.com/'><FaInstagramSquare className='size-4 ' /></a>
                        <a href='https://www.youtube.com/'><FaYoutube className='size-5' /></a>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Footer;