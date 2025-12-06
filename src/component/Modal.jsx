import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";


const Modal = ({ isOpen, isClose }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleForm = (e) => {
        e.preventDefault()
        console.log(email, pass)
        // console.log('clicked form')
        isClose()
        setEmail('')
        setPass('')

    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : 'hidden'}`}>
            <div className='modal-container'>
                <div className='bg-white text-center h-92 lg:h-96 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>
                    <RxCross2 onClick={isClose} className='absolute right-2 top-2 size-6' />
                    <h1 className='text-xl md:text-2xl pt-8 tracking-wide text-black font-bold uppercase '>Please Sign In Here!</h1>


                    <form onSubmit={handleForm} className='mt-4 md:mt-8 flex flex-col gap-4 items-center'>

                        <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder='example@gmail.com' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

                        <input type='password' onChange={(e) => { setPass(e.target.value) }} value={pass} required placeholder='Enter your password' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

                        <button type='submit' className='mt-0 bg-red-600 px-2 py-2 rounded w-5/6 lg:w-4/5 text-white font-bold'>Sign In</button>
                    </form>
                    <div className='mt-4 px-16'>
                        <p className='text-black'>Or Sign in by,</p>
                        <div className='flex gap-6 items-center justify-center mt-2'>
                            <div onClick={() => {
                                handleGoogle()
                            }} className='cursor-pointer'>
                                <FcGoogle className='size-9' />
                            </div>
                            <div className='cursor-pointer'>
                                <FaFacebook className='size-8 text-blue-600' />
                            </div>
                        </div>
                    </div>
                    <div className='text-black mt-2'>
                        <p>New User? <span 
                         className='font-semibold underline cursor-pointer'>Sing Up</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;