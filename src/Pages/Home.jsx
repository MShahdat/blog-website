import React from 'react';
import Hero from '../component/Home/Hero';
import Latest from '../component/Home/Latest';
import Popular from '../component/Home/Popular';
import Ab from '../component/About/Ab';
import Testimonial from '../component/Home/Testimonial';
import Service from '../component/Servi/Service';
import Blog from '../component/Home/Blog';
import AbCard from '../component/About/AbCard';
import { Contributor } from '../../public/Contributor';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Latest></Latest> */}
            {/* <Popular></Popular> */}
            <Ab></Ab>
            <Blog></Blog>
            <Service></Service>
            <AbCard contributor = {Contributor}></AbCard>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;