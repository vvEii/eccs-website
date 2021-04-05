import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <div className='flex space-x-10 space-y-10 w-3/5'>
      {/* <Link
        to={{
          pathname: `/program-details/${props.id}`,
          programProps: {
            content: props.content,
            title: props.title,
            index: props.index,
          },
        }}
      >
        <img src={props.image} alt='' className='object-cover w-2/6' />
      </Link> */}
      <img src={props.image} alt='' className='object-cover w-2/6' />
      <div className='flex flex-col items-start space-y-10 justify-end'>
        <p className='text-lg'>{props.date}</p>
        <Link>
          <p className='text-3xl font-medium'>{props.title}</p>
        </Link>

        <p className='text-lg font-normal text-left'>{props.abstract}</p>
      </div>
    </div>
  );
};

export default PostCard;
