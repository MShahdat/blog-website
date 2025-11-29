import React, { useEffect, useState } from 'react';

const Category = ({ blog, onSelect, active }) => {

    // console.log(blog[0].category)

    const uniCategory = [...new Set(blog.map(item => item.category))];

    // console.log(uniCategory)

    return (
        <div className='flex gap-2 md:gap-4 items-center flex-wrap py-4'>
            <button onClick={() => onSelect(null)} 
            className={`px-3 py-1 rounded text-[16px] lg:text-[18px] text-gray-800 font-semibold ${active === null ? "bg-amber-700 text-white font-bold" : 'bg-gray-100 text-black'}`}>ALL</button>
            {uniCategory.map((cat, idx) => (
                <button onClick={() => onSelect(cat)} key={idx} className={`px-3 py-1 rounded text-[16px] lg:text-[18px] font-semibold text-gray-800 ${active === cat ? "bg-amber-700 text-white font-bold" : 'bg-gray-100 text-black'}`}>
                    {cat}
                </button>
            ))}

        </div>
    );
};

export default Category;