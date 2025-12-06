import React from 'react';
import Blog from '../component/Blog/Blog';
import Banner from '../component/Banner';
import BannerCard from '../component/BannerCard';

const Blogs = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1764691405953-0430c2df0c59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <>
        {/* <Banner txt = {'Blog Page'}></Banner> */}
        <BannerCard url = {url} page = 'Blog'></BannerCard>
        <Blog></Blog>
        </>
    );
};

export default Blogs;