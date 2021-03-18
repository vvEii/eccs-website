import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={props.img} alt='Program' className='object-cover' />
      <div className='text-black'>{props.date}</div>
      <div className='text-black text-4xl font-normal'>{props.title}</div>
      <div className='text-black'>{props.abstract}</div>
      <Link to='/' className='underline text-black'>
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
