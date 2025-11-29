import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Card = (props) => {
    console.log(props.item)
    // console.log(props.he)

    return (
        <div>
            <div className={` bg-white shadow-2xl px-2 py-2 rounded mt-3 hover:scale-103 duration-500 transform`}>
                <Link to={`/blog/${props.item.id}`} className=''>
                    <img src={props.item.image} className=' w-full h-52 rounded-t object-cover'></img>
                    <div className='bg-orange-700 text-white px-3 py-2'>
                        <h2 className='text-[18px] font-medium line-clamp-1 leading-tight'>{props.item.title}</h2>

                        <div className='mt-3 flex items-center gap-2 '>
                            <FcBusinessman />
                            <h2 className='text-[17px] text-gray-200 font-medium'>{props.item.author}</h2>
                        </div>
                        <p className='text-[15px] text-gray-300'>Published: {props.item.published_date}</p>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;