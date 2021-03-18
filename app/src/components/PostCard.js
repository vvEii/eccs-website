import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center col-span-1 row-span-1'>
      <img src={props.img} alt='Program' className='object-contain' />
      <div className='text-black text-base pt-8'>{props.date}</div>
      <div className='text-black text-3xl font-normal pt-8'>{props.title}</div>
      <div className='text-black text-sm pt-8'>{props.abstract}</div>
      <Link to='/' className='underline text-black text-base pt-8'>
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
