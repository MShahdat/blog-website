import React from 'react';
import Banner from '../component/Banner';
import Conta from '../component/Contact/Conta';
import BannerCard from '../component/BannerCard';

const Contact = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1661963425417-1f8ea3c6a297?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div>
            {/* <Banner txt = {'Contact Page'}></Banner> */}
            <BannerCard url = {url} page = 'Contact'></BannerCard>
            <Conta></Conta>
        </div>
    );
};

export default Contact;