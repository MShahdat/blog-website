import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
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
                <div className='bg-white text-center h-78 lg:h-88 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>
                    <RxCross2 onClick={isClose} className='absolute right-2 top-2 size-6' />
                    <h1 className='text-2xl pt-12 font-bold uppercase '>Please Login Here!</h1>


                    <form onSubmit={handleForm} className='mt-8 flex flex-col gap-4 items-center'>
                        
                        <input type='email' onChange={(e) => {setEmail(e.target.value)}} value={email} required placeholder='example@gmail.com' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

                        <input type='password' onChange={(e) => {setPass(e.target.value)}} value={pass} required placeholder='Enter your password' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

                        <button type='submit' className='mt-2 lg:mt-2 bg-orange-700 px-2 py-2 rounded w-1/2 text-white font-bold'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;