import React from 'react';

const PostCard = (props) => {
  return (
    <div className='flex space-x-10 space-y-10 w-3/5'>
      <img src={props.image} alt='' className='object-cover w-2/6' />
      <div className='flex flex-col items-start space-y-10'>
        <p className='text-lg'>{props.date}</p>
        <p className='text-3xl font-medium'>{props.title}</p>
        <p className='text-lg font-normal text-left'>{props.abstract}</p>
      </div>
    </div>
  );
};

export default PostCard;
