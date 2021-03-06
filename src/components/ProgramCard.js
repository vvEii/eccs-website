import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center col-span-1 row-span-1'>
      <img
        src={props.img}
        alt='Program'
        className='object-cover w-full md:w-auto md:h-full md:px-0'
      />
      <div className='text-black text-3xl font-normal pt-8'>{props.title}</div>
      <div className='text-black text-sm pt-8 font-light md:font-normal'>
        {props.abstract}
      </div>
      <Link
        to={{
          pathname: `/program-details/${props.id}`,
          programProps: {
            content: props.content,
            title: props.title,
            index: props.index,
          },
        }}
        className='underline text-black text-base pt-8 font-light md:font-normal'
      >
        Read More
      </Link>
    </div>
  );
};

export default ProgramCard;
