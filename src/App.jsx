import React, { useState } from 'react';
import Nav from './component/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import ScrollTop from './Scroll/ScrollTop';
import Singin from './component/Signin';
import Singup from './component/Signup';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [open, setOpen] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false);
  const [userIn, setUserIn] = useState('')

  return (
    <div>
      <ScrollTop></ScrollTop>
      <Nav
        open = {open}
        setOpen = {setOpen}
        setSignIn={setSignIn}
        setSignUp={setSignUp}
      ></Nav>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      {
        signIn &&
        <Singin
          setSignIn={setSignIn}
          setSignUp={setSignUp}
          userIn={userIn}
          setUserIn={setUserIn}
        ></Singin>
      }

      {
        signUp &&
        <Singup
          setSignIn={setSignIn}
          setSignUp={setSignUp}
          userIn = {userIn}
          setUserIn = {setUserIn}

        ></Singup>
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;