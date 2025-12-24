import React from 'react';
import Blog from '../component/Blog/Blog';
import Banner from '../component/Banner';
import BannerCard from '../component/BannerCard';

const Blogs = () => {
    const url = 'https://images.unsplash.com/photo-1639054098022-49f836a42e43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <>
        {/* <Banner txt = {'Blog Page'}></Banner> */}
        <BannerCard url = {url} page = 'Blog'></BannerCard>
        <Blog></Blog>
        </>
    );
};

export default Blogs;