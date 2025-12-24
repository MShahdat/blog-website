import React from 'react';
import Banner from '../component/Banner';
import Conta from '../component/Contact/Conta';
import BannerCard from '../component/BannerCard';

const Contact = () => {
    const url = 'https://images.unsplash.com/photo-1708527804249-b3387906b3cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div>
            {/* <Banner txt = {'Contact Page'}></Banner> */}
            <BannerCard url = {url} page = 'Contact'></BannerCard>
            <Conta></Conta>
        </div>
    );
};

export default Contact;