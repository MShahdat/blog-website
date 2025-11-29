import React from 'react';
import Hero from '../component/Home/Hero';
import Latest from '../component/Home/Latest';
import Popular from '../component/Home/Popular';
import Ab from '../component/About/Ab';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Latest></Latest> */}
            {/* <Popular></Popular> */}
            <Ab></Ab>
        </div>
    );
};

export default Home;