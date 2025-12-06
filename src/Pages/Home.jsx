import React from 'react';
import Hero from '../component/Home/Hero';
import Latest from '../component/Home/Latest';
import Popular from '../component/Home/Popular';
import Ab from '../component/About/Ab';
import Testimonial from '../component/Home/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Latest></Latest> */}
            {/* <Popular></Popular> */}
            <Ab></Ab>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;