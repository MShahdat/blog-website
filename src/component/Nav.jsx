import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMeta } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from './Modal';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/Motion';


const Nav = () => {

    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false);


    const navitem = [
        {path: '/', link: 'Home'},
        {path: '/blogs', link: 'Blogs'},
        {path: '/services', link: 'Services'},
        // {path: '/about', link: 'About'},
        {path: '/contact', link: 'Contact'},
    ]

    const oModel = () => {
        setOpenModal(true)
        console.log('clicked')
    }

    const cModel = () => {
        setOpenModal(false)
    }


    return (
        <div
        className='bg-[#020120] text-white sticky left-0 top-0 z-50'>
            <motion.nav
            variants={fadeIn('down', '.3')}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{defaultViewport}}

            className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-2xl sm:text-2xl lg:text-3xl font-bold'>Design<span className='text-orange-700'>DK</span></Link>
                <div className='flex items-center gap-6'>
                    {navitem.map((item,idx) =>{
                        return (
                            <NavLink key={idx} to={item.path} className={({isActive}) => `hidden md:block text-lg ${isActive ? 'text-orange-500' : ''}`}>{item.link}</NavLink>
                        )
                    })

                    }
                </div>
                <div className=''>
                    <div className=' flex items-end md:items-center gap-5 '>
                    <a href='https://www.facebook.com/business/tools/meta-business-suite'><FaMeta className='size-5'/></a>
                    <a href='https://www.linkedin.com/'><FaLinkedin className='size-5'/></a>
                    <a href='https://x.com/'><FaTwitter className='size-5'/></a>
                    <div onClick={oModel} className='px-3 py-1 bg-orange-700 font-semibold rounded hidden md:block hover:bg-white hover:text-orange-600'>
                        <button>Log in</button>
                    </div>
                    <div onClick={() => setOpen(!open)} className='block md:hidden '>
                        {open ? <RxCross2 className='size-6'/> : <IoMdMenu className='size-6'/>}
                    </div>
                </div>
                </div>

                <Modal isOpen = {openModal} isClose = {cModel}></Modal>
            </motion.nav>
            
            {/* for mobile */}

            <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
                <div className='flex flex-col gap-2 px-4 sm:px-8 mt-0 pt-2 pb-4 bg-orange-700  text-gray-100'>
                {
                    navitem.map((item,idx) => {
                        return (
                            <Link key={idx} to={item.path} onClick={() => setOpen(false)} className='text-lg hover:scale-102 duration-500 transform font-semibold'>{item.link}</Link>
                        )
                    })
                }
                <div onClick={() => { oModel(); setOpen(false); }} className='text-center text-lg py-1.5 bg-white text-black font-semibold rounded w-full'>
                        <button>Log in</button>
                    </div>
            </div>
            </div>

        </div>
    );
};

export default Nav;