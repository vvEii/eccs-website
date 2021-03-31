import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center col-span-1 row-span-1'>
      <img src={props.img} alt='Program' className='object-cover h-full' />
      <div className='text-black text-3xl font-normal pt-8'>{props.title}</div>
      <div className='text-black text-sm pt-8'>{props.abstract}</div>
      <Link
        to={{
          pathname: `/program-details/${props.id}`,
          programProps: {
            content: props.content,
            title: props.title,
            index: props.index,
          },
        }}
        className='underline text-black text-base pt-8'
      >
        Read More
      </Link>
    </div>
  );
};

export default ProgramCard;
