import React, { useRef, useState } from 'react';
import { IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const testi = [
  {
    id: 1,
    name: 'Shahdat Hossain',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea reiciendis architecto error placeat fuga sed rerum porro perferendis dignissimos!',
    rating: 4,
    place: 'Dhaka-1000',
  },
  {
    id: 2,
    name: 'Shahdat Hossain',
    image: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea reiciendis architecto error placeat fuga sed rerum porro perferendis dignissimos!',
    rating: 4,
    place: 'Dhaka-1000',
  },
  {
    id: 3,
    name: 'Shahdat Hossain',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea reiciendis architecto error placeat fuga sed rerum porro perferendis dignissimos!',
    rating: 4,
    place: 'Dhaka-1000',
  },
  {
    id: 4,
    name: 'Shahdat Hossain',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea reiciendis architecto error placeat fuga sed rerum porro perferendis dignissimos!',
    rating: 4,
    place: 'Dhaka-1000',
  },
  {
    id: 5,
    name: 'Shahdat Hossain',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea reiciendis architecto error placeat fuga sed rerum porro perferendis dignissimos!',
    rating: 4,
    place: 'Dhaka-1000',
  },
]
const Testimonial = () => {

  const slickRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  var settings = {
    // we'll render our own dots so we can control exact placement
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),

  };

  return (
    <div className='bg-white text-black'>
      <div className='max-w-7xl px-4 py-0 lg:py-8 mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={defaultViewport}
          className='flex flex-col items-center py-8'>
          <h2 className='-mt-5 text-2xl md:text-4xl font-bold text-orange-600'>Our Testimonial</h2>
        </motion.div>
        <div className='relative pb-8'>
          <Slider ref={slickRef} {...settings}>
            {
              testi.map((te, idx) => (
                <div key={idx} className='mt-2 lg:mt-8 sm:px-8 md:px-20 lg:px-30 flex flex-col items-center justify-center'>
                  <img src={te.image} className='w-32 h-32 mx-auto object-cover rounded-full border-4 border-orange-600'></img>
                  <p className='text-center mt-6 text-md sm:text-lg lg:text-xl text-black/70'>{te.msg}</p>
                  <div className='mt-4 flex items-center gap-1 justify-center'>
                    {[...Array(te.rating)].map((_, i) => (
                      <div key={i}>
                        <IoStar className='text-orange-500 size-5' />
                      </div>
                    ))}
                  </div>
                  <p className='mt-4 text-center sm:text-lg lg:text-xl font-bold'>{te.name}, <span>{te.place}</span></p>
                </div>
              ))
            }

          </Slider>

          {/* Custom dots placed at bottom center */}
          <div className="absolute left-0 right-0 bottom-2 lg:-bottom-2 flex justify-center">
            <div className="flex gap-3">
              {testi.map((_, i) => (
                <button
                  key={i}
                  onClick={() => slickRef.current && slickRef.current.slickGoTo(i)}
                  className={`w-3 h-3 rounded-full transition-colors duration-150 ${currentSlide === i ? 'bg-orange-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;