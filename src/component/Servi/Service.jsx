import React from 'react';
import ServiceCard from './ServiceCard';
import { Services } from '../../../public/Services';
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const Service = () => {
    const token = localStorage.getItem('userToken');

    return (
        <div className='max-w-7xl px-4 py-16 mx-auto'>
            {/* <p>this is the user login token {token}</p> */}
            <div className='flex flex-col items-center gap-0'>
                <motion.p
                variants={fadeIn('up', 0.2)}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                className='text-md sm:text-lg text-black font-semibold'>Our services</motion.p>

                <motion.h2
                variants={fadeIn('up', 0.4)}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-1 text-orange-600'>What We Offer</motion.h2>

                <motion.p
                variants={fadeIn('up', 0.6)}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                className='mt-2 text-gray-700 text-md sm:text-[18px] w-[320px] sm:w-[550px] md:w-[600px] lg:w-[800px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi animi recusandae corrupti assumenda praesentium facere ipsa voluptatibus fuga similique?</motion.p>
                <p className='mt-8'></p>

                <div>
                    <ServiceCard ourServices = {Services} ></ServiceCard>
                </div>
                <p className='mt-4'></p>
            </div>
        </div>
    );
};

export default Service;   