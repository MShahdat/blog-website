import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMeta } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from './Modal';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/Motion';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase/firebase';
import { toast } from 'react-toastify'

const Nav = ({open, setOpen, setSignIn, setSignUp }) => {

    const [token, setToken] = useState(localStorage.getItem('blog_user'));

    const navitem = [
        { path: '/', link: 'Home' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/services', link: 'Services' },
        {path: '/about', link: 'About'},
        { path: '/contact', link: 'Contact' },
    ]

    //handle logout part
    const auth = getAuth(app);
    const logOut = () => {
        console.log('log out clicked')
        signOut(auth).then(() => {
            toast.success('Logout Successfully!')
            localStorage.removeItem('blog_user');
            setToken(null)
            window.dispatchEvent(new Event('storage'))
        }).catch((error) => {
            toast.error('Logout failed')
        });
    }

    useEffect(() => {
        const syncToken = () => {
            setToken(localStorage.getItem('blog_user'))
        }
        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, [])



    return (
        <div
            className='bg-[#020120] text-white sticky left-0 top-0 z-50'>
            <motion.nav
                variants={fadeIn('down', '.3')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ defaultViewport }}

                className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-2xl sm:text-2xl lg:text-3xl font-bold'>Design<span className='text-orange-700'>DK</span></Link>
                <div className='flex items-center gap-6'>
                    {navitem.map((item, idx) => {
                        return (
                            <NavLink key={idx} to={item.path} className={({ isActive }) => `hidden md:block text-lg ${isActive ? 'text-orange-500' : ''}`}>{item.link}</NavLink>
                        )
                    })

                    }
                </div>
                <div className=''>
                    <div className=' flex items-center gap-5 '>
                        <a href='https://www.facebook.com/business/tools/meta-business-suite'><FaMeta className='size-5' /></a>
                        <a href='https://www.linkedin.com/'><FaLinkedin className='size-5' /></a>
                        <a href='https://x.com/'><FaTwitter className='size-5' /></a>

                            {
                                token &&
                                <img src={JSON.parse(token).photo} className=' h-8 w-8 object-cover rounded-full'></img>
                            }

                            {
                                !token ? (
                                    <div onClick={() => {
                                        setSignIn(true)
                                    }} className='px-3 py-1 bg-orange-700 font-semibold rounded hidden md:block hover:bg-white hover:text-orange-600'>
                                        <button>Sign in</button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => {
                                            console.log('logout button clicked')
                                            logOut()

                                        }}
                                        className='px-3 py-1 bg-orange-700 font-semibold rounded hidden md:block hover:bg-white hover:text-orange-600'>
                                        <button>Sign out</button>
                                    </div>
                                )
                            }

                        <div onClick={() => {
                            setSignIn(false)
                            setOpen(!open)
                        }} className='block md:hidden '>
                            {open ? <RxCross2 className='size-6' /> : <IoMdMenu className='size-6' />}
                        </div>
                    </div>
                </div>
            </motion.nav >

            {/* for mobile */}

            <div div className={`${open ? 'block' : 'hidden'} md:hidden`}>
                <div className='flex flex-col gap-2 px-4 sm:px-8 mt-0 pt-2 pb-4 bg-orange-700  text-gray-100'>
                    {
                        navitem.map((item, idx) => {
                            return (
                                <Link key={idx} to={item.path} onClick={() => setOpen(false)} className='text-lg hover:scale-102 duration-500 transform font-semibold'>{item.link}</Link>
                            )
                        })
                    }
                    <div>
                        {
                            !token ? (
                                <div onClick={() => {
                                    setSignIn(true)
                                    setOpen(!open)
                                }} className='text-center text-lg py-1.5 bg-white text-black font-semibold rounded w-full'>
                                    <button>Sign in</button>
                                </div>
                            ) : (
                                <div onClick={() => {
                                    logOut()
                                }}
                                    className='text-center text-lg py-1.5 bg-white text-black font-semibold rounded w-full'>
                                    <button
                                    >Sign out</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Nav;