import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../component/Banner';
import Ab from '../component/About/Ab';


const About = () => {
    return (
        <div>
            {/* <Banner txt = {'About Page'}></Banner> */}
            <Ab></Ab>
        </div>
    );
};

export default About;