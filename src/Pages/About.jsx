import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../component/Banner';
import Ab from '../component/About/Ab';
import BannerCard from '../component/BannerCard';
import AbCard from '../component/About/AbCard';
import { Contributor } from '../../public/Contributor';

const About = () => {
    const url = 'https://images.unsplash.com/photo-1502847427791-d0194ec4cff4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div>
            {/* <Banner txt = {'About Page'}></Banner> */}
            <BannerCard url = {url} page = 'About' ></BannerCard>
            <Ab></Ab>
            <AbCard contributor = {Contributor} ></AbCard>
        </div>
    );
};

export default About;