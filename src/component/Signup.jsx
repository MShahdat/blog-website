import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/Motion';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { app } from '../firebase/firebase';
import {toast} from 'react-toastify'

const Singup = ({setSignIn, setSignUp, setUserIn}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email, pass)
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]{6,}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@((gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|mail|gmx)\.(com|org|net|edu|gov|info)|([a-zA-Z0-9.-]+\.)?(edu|ac)\.bd)$/;

    if(!passwordRegex.test(pass)){
      toast.error('Password must include uppercase, lowercase, number, and special character');
      return;
    }else if(!emailRegex.test(email)){
      toast.error('Invalid email domain')
      return
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, {
          displayName: name,
          photoURL: 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'
        }).then(() => {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          }
          setUserIn(userInfo)
        })   
        toast.success('Sign up successfully!')
        setSignUp(false);
        setSignIn(true);

      }).catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        console.log(errorCode)
        console.log(errorMsg);
      })

  }

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
          console.log(user.accessToken)
  
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          }
  
          toast.success("Login Successfully")
          setSignUp(false)
          localStorage.setItem('blog_user', JSON.stringify(userInfo))
          window.dispatchEvent(new Event('storage'))
  
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
            setSignUp(false)
    
            const userInfo = {
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              uid: user.uid,
            }
            
            localStorage.setItem('blog_user', JSON.stringify(userInfo))
            window.dispatchEvent(new Event('storage'));
            
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('Facebook singin failed');
            console.log(errorMessage)
          });
    
      }


  return (
    <div
    className='flex items-center justify-center bg-black/20 h-screen fixed inset-0 z-40'>
      <div className='bg-black/10 backdrop-blur-3xl text-center h-108 lg:h-108 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>
        <RxCross2 onClick={() => {
          setSignUp(false)
        }} className='absolute right-2 top-2 text-white size-6' />
        <h1 className='text-xl md:text-2xl tracking-wide pt-8 text-white font-bold uppercase '>Please Sign Up Here!</h1>


        <form onSubmit={handleForm} className='mt-4 md:mt-6 flex flex-col gap-4 items-center'>

          <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} required placeholder='Name' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder='example@gmail.com' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <input type='password' onChange={(e) => { setPass(e.target.value) }} value={pass} required placeholder='Enter your password' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <button type='submit' className='mt-2 bg-red-600 px-2 py-2 rounded w-5/6 lg:w-4/5 text-white font-bold'>Sign Up</button>
        </form>

        <div className='mt-4 px-16'>
          <p className='text-white'>Or Sign up by,</p>
          <div className='flex gap-6 items-center justify-center mt-2'>
            <div className='cursor-pointer'>
              <FcGoogle onClick={handleGoogle} className='size-9' />
            </div>
            <div className='cursor-pointer'>
              <FaFacebook onClick={handleFb} className='size-8 text-blue-600' />
            </div>
          </div>
        </div>

        <div className='text-white mt-2'>
          <p>Already have an Account? <span onClick={() => {
            setSignIn(true)
            setSignUp(false)
          }} className='font-semibold underline cursor-pointer'>Sing In</span></p>
        </div>
      </div>
    </div>
  );
};

export default Singup;