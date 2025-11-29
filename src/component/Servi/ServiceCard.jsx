import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';


const ServiceCard = (props) => {
    console.log(props.ourServices);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {props.ourServices.map((item, idx) => (
                <motion.div
                variants={fadeIn('up', 0.4 )}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                key={idx} className='flex flex-col items-center justify-center bg-white rounded-xl shadow-2xl py-4 pt-8 px-4 hover:scale-105 duration-500 transform'>
                    <img src={item.logo} className='h-32  w-32 object-cover rounded-full'></img>
                    <h1 className='text-xl  font-medium mt-3 text-orange-600'>{item.type}</h1>
                    <p className='px-4 text-[16px] sm:text-[17px] leading-normal mt-2 text-gray-600 line-clamp-3'>{item.des}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default ServiceCard;