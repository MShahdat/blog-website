import React from 'react';
import AbCard from './AbCard';
import { Contributor } from '../../../public/Contributor';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, defaultViewport } from '../../motion/Motion';


const Ab = () => {


    return (
        <div className='max-w-7xl px-4 py-8 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <motion.img
                    variants={fadeIn('right', '0.2')}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}

                    src='https://plus.unsplash.com/premium_photo-1683121019387-dd9be8305a5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-64 sm:h-76 lg:h-84  object-cover rounded'></motion.img>
                <div
                >
                    <motion.p
                        variants={fadeIn('up', '.2')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                        className='mt-4 md:text-md lg:text[16px] text-orange-600 font-semibold'>Who we are</motion.p>

                    <motion.h1
                    variants={fadeIn('up', '.4',)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                    className='mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-800'>We provide <span className='text-orange-600'>high quality</span> Articles & blogs</motion.h1>

                    <div
                    className=' md:text-[15px] lg:text-[16px] mt-4 lg:mt-6 text-gray-700'>
                        <motion.p
                        variants={fadeIn('up', '.6')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab excepturi tenetur quas eaque nesciunt autem tempore debitis cum perspiciatis?</motion.p><br></br>
                    </div>
                </div>
            </div>
            <motion.p
            variants={fadeIn('up', '.2')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
             className='mt-20 text-2xl sm:text-3xl lg:text-3xl font-medium text-orange-600 pb-8 '>Top Contributor</motion.p>
            <AbCard contributor={Contributor}></AbCard>
        </div>
    );
};

export default Ab;