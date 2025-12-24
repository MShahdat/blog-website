import React, { useRef, useEffect, useState } from 'react';
import { LuNotebookPen } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const AbCard = (props) => {
    console.log(props.contributor)

    const slickRef = useRef(null)

    const getSlidesToShow = (width) => {
        if (!width) return 4
        if (width <= 500) return 1
        if (width <= 767) return 2
        if (width <= 1024) return 3
        return 4
    }

    const [slidesToShow, setSlidesToShow] = useState(() => {
        if (typeof window !== 'undefined') return getSlidesToShow(window.innerWidth)
        return 4
    })

    useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow(window.innerWidth))
        // ensure correct value on mount
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };


    return (
        <div className='max-w-7xl px-4 py-16 mx-auto'>
            <motion.p
            variants={fadeIn('up', '.2')}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={defaultViewport}
             className=' text-2xl  md:text-4xl font-bold text-orange-600 pb-8 text-center '>Top Contributor</motion.p>
            <motion.div
                variants={fadeIn('up', '.4')}
                initial={'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                className='relative'>
                <Slider ref={slickRef} {...settings} >
                    {props.contributor.map((con, idx) => (
                        <div
                            key={idx} className='px-1'>
                            <div className='bg-white shadow rounded overflow-hidden'>
                                <img src={con.url} className='w-full h-48 object-cover rounded-t'></img>
                                <div className='bg-orange-700 text-white py-1 px-2'>
                                    <h2 className='text-lg font-medium'>{con.name}</h2>
                                    <h2 className='mt-1 text-[16px]'>{con.role}</h2>
                                    <div className='mt-0 pb-1 flex text-gray-300 items-center gap-2 '>
                                        <LuNotebookPen />
                                        <p className='text-sm'>{con.published} Article Published</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className='flex items-center justify-between absolute left-3 right-3 top-[40%]'>
                    <div onClick={() => slickRef.current.slickPrev()} className='bg-gray-200 px-1 py-1 rounded-full'>
                        <RiArrowLeftLine className='text-black' />
                    </div>
                    <div onClick={() => slickRef.current.slickNext()} className='bg-gray-200 px-1 py-1 rounded-full'>
                        <RiArrowRightLine className='text-black' />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AbCard;