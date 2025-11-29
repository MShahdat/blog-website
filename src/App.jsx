import React from 'react';
import Nav from './component/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import ScrollTop from './Scroll/ScrollTop';

const App = () => {
  return (
    <div>
      <ScrollTop></ScrollTop>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;