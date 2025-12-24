import React, { use, useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { toast } from 'react-toastify';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";

import { app } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const Signin = ({ setSignIn, setSignUp, userIn, setUserIn }) => {

  const navigate = useNavigate();

  console.log(userIn)

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const providerFb = new FacebookAuthProvider();
  providerFb.addScope('public_profile');
  providerFb.addScope('email');

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Login successful (Google)');
        console.log(user);

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }

        toast.success("Login Successfully")
        setSignIn(false)
        localStorage.setItem('blog_user', JSON.stringify(userInfo))
        window.dispatchEvent(new Event('storage'))
        navigate('/')
      })
      .catch((error) => {
        console.log('Login failed (Google)');
        toast.error('Login failed')
        console.log(error.message);
      });
  };

  const handleFb = () => {
    signInWithPopup(auth, providerFb)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        toast.success("Sign successfully!")
        setSignIn(false)

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }

        localStorage.setItem('blog_user', JSON.stringify(userInfo))
        window.dispatchEvent(new Event('storage'));
        navigate('/')
      })
      .catch((err) => {
        // Handle Errors here.
        if (err.code === "auth/account-exists-with-different-credential") {
          toast.error('auth/account-exists-with-different-credential')
        } else {
          console.log(err)
          toast.error('Sing in failed!')
        }

      });

  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email, pass);
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user)
        toast.success('login successfully!');
        setSignIn(false)
        localStorage.setItem('blog_user', JSON.stringify(userIn))
        window.dispatchEvent(new Event('storage'));
        navigate('/')
      }).catch((error) => {
        console.log(error.code)
        toast.error('Invalid email password!')
      })
  };

  return (
    <div className='flex items-center justify-center bg-black/20 h-screen fixed inset-0 z-40'>
      <div className='bg-black/10 backdrop-blur-3xl text-center h-96 lg:h-96 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>

        <RxCross2
          onClick={() => setSignIn(false)}
          className='absolute right-2 top-2 text-white size-6'
        />

        <h1 className='text-xl md:text-2xl pt-8 tracking-wide text-white font-bold uppercase'>
          Please Sign In Here!
        </h1>

        <form onSubmit={handleForm} className='mt-4 md:mt-8 flex flex-col gap-4 items-center'>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder='example@gmail.com'
            className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'
          />

          <input
            type='password'
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
            placeholder='Enter your password'
            className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'
          />

          <button
            type='submit'
            className='mt-2 bg-red-600 px-2 py-2 rounded w-5/6 lg:w-4/5 text-white font-bold'
          >
            Sign In
          </button>
        </form>

        <div className='mt-4 px-16'>
          <p className='text-white'>Or Sign in by,</p>
          <div className='flex gap-6 items-center justify-center mt-2'>

            <div onClick={handleGoogle} className='cursor-pointer'>
              <FcGoogle className='size-9' />
            </div>

            <div onClick={handleFb} className='cursor-pointer'>
              <FaFacebook className='size-8 text-blue-600' />
            </div>

          </div>
        </div>

        <div className='text-white mt-2'>
          <p>
            New User?
            <span
              onClick={() => {
                setSignUp(true);
                setSignIn(false);
              }}
              className='font-semibold underline cursor-pointer'
            >
              Sign Up
            </span>
          </p>
        </div>

        {/* ToastContainer moved to App.jsx so toasts render at the top of the screen globally */}
      </div>
    </div>
  );
};

export default Signin;
