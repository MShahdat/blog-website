import React from 'react';

const Banner = (props) => {
    console.log(props.txt)

    return (
        <>
            <div className='bg-black text-white '>
                <div className='max-w-7xl px-4 py-10 mx-auto'>
                    <h2 className='text-3xl text-center sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-100 font-serif'>{props.txt}</h2>
                </div>
            </div>
        </>
    );
};

export default Banner;