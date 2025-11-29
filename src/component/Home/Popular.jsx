import React from 'react';
import { Blogs } from '../../../public/Blogs';
import Card from '../Blog/Card';

const Popular = () => {
    console.log(Blogs)

    const blog = Blogs.slice(Blogs.length - 20, Blogs.length-14)
    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h3 className='text-2xl sm:text-3xl lg:text-3xl text-orange-600 font-bold pb-2'>Popular Blogs</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    blog.map((item, idx) => {
                        return (
                            <div key={idx} className= {idx === 0 || idx === 5 ? "lg:col-span-2" : ""}>
                                <Card item = {item}></Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Popular;