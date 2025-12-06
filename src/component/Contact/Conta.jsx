import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';


const Conta = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sub, setSub] = useState('')
    const [msg, setMsg] = useState('')

    const formhandle = (e) => {
        e.preventDefault()
        console.log("name", name)
        console.log("email", email)
        console.log("subject", sub)
        console.log("message", msg)

        alert('Your message has been submitted')
        setName('')
        setEmail('')
        setSub('')
        setMsg('')

    }
    
    return (
        <div className='max-w-7xl px-3 py-12 mx-auto'>
            <div className='px-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <motion.img
                variants={fadeIn('right', 0.2 )}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                src='https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full mt-2 h-68 sm:h-110 rounded object-cover'></motion.img>
                <motion.div
                variants={fadeIn('left', 0.2 )}
                initial = {'hidden'}
                whileInView={'show'}
                viewport={defaultViewport}
                className='mt-0'>
                    <form onSubmit={formhandle} className='w-full px-2 lg:px-4 xl:px-8'>
                        <label className='mt-0 block font-semibold text-xl'>Full Name</label>
                        <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

                        <label className='mt-3 block font-semibold text-xl'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

                        <label className='mt-3 block font-semibold text-xl'>Subject</label>
                        <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Subject' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

                        <label className='mt-3 block font-semibold text-xl'>Message</label>
                        <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></textarea>


                        <button type='submit' className='bg-orange-700 text-white font-bold text-lg px-4 rounded mt-2 py-1.5'>Submit</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Conta;