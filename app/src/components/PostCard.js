import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <div className='flex flex-col space-y-10 w-3/5 md:flex-row md:space-x-10 md:items-end'>
      <img
        src={props.image}
        alt=''
        className='object-cover md:w-4/5 max-h-80 '
      />
      <div className='flex flex-col items-start space-y-10 justify-end'>
        <p className='text-lg'>{props.date}</p>
        <Link
          to={{
            pathname: `/blog-details/${props.id}`,
            blogProps: {
              id: props.id,
            },
          }}
        >
          <p className='text-3xl font-medium text-left'>{props.title}</p>
        </Link>
        <p className='text-lg font-normal text-left'>{props.abstract}</p>
      </div>
    </div>
  );
};

export default PostCard;
