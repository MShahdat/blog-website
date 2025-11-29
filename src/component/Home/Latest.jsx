import React from 'react';
import { Blogs } from '../../../public/Blogs.js';
import Card from '../Blog/Card.jsx';


const Latest = () => {

    console.log(Blogs)
    console.log(Blogs.length)

     const blog = Blogs.slice(Blogs.length - 5, Blogs.length)

    console.log(blog)

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h3 className='text-2xl sm:text-3xl lg:text-3xl text-orange-600 font-bold pb-2'>Latest Blogs</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    blog.map((item, idx) => {
                        return (
                            <div key={idx} className= {idx === 0 ? "lg:col-span-2" : " "}>
                                <Card item = {item}></Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Latest;