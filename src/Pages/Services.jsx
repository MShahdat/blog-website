import React from 'react';
import Banner from '../component/Banner';
import Service from '../component/Servi/Service';
import BannerCard from '../component/BannerCard';

const Services = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1764702378443-dea8c6e05147?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div>
            {/* <Banner txt = {'Service Page'}></Banner> */}
            <BannerCard url = {url} page = 'Services'></BannerCard>
            <Service></Service>
            
        </div>
    );
};

export default Services;