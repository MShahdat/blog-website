import { Link } from "react-router-dom";
import Nav from "./Nav";
import { IoIosArrowForward, IoMdSad } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from "../motion/Motion";

const BannerCard = (props) => {

  return (
    <div className=' text-white relative'>
      <img src={props.url}
        className='w-screen h-[200px] md:h-[250px] object-cover'
      ></img>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className=' text-center '>
          <h2 className='text-5xl md:text-5xl lg:text-7xl font-bold text-center tracking-[2px]'>{props.page}</h2>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className="whitespace-nowrap flex gap-0 bg-black/5 backdrop-blur-xl px-4 py-0.5 rounded border border-white font-medium text-lg md:text-xl mx-auto w-fit">
          <Link to={'/'} className="flex items-center hover:text-orange-600 hover:scale-101 duration-300 transform">
            <h3>Home</h3>
            <IoIosArrowForward className="mt-1.5" />
          </Link>
          <div className="">
            <h3>{props.page}</h3>
            {/* <IoIosArrowForward className="mt-1.5"/> */}
          </div>
        </motion.div>
      </div>

      {/* <button className='bg-red-600 text-white font-medium px-4 py-2 rounded active:bg-red-700'>Go to Menu</button> */}

    </div>

  );
};

export default BannerCard;