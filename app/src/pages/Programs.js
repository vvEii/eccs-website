import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PROGRAMS from '../data/programs';

const Programs = () => {
  return (
    <div className='px-24 lg:px-60 2xl:px-96'>
      <div className='div text-5xl text-black font-medium block mt-40 mb-24'>
        Current Programs
      </div>
      <div className='grid grid-cols-2 gap-10'>
        {PROGRAMS.map((program, index) => (
          <PostCard
            img={program.img}
            title={program.title}
            abstract={program.abstract}
            content={program.content}
            key={program.id}
            id={program.id}
            index={index}
          />
        ))}
      </div>

      <Link
        className='hover:underline text-5xl text-black font-medium block mb-40 mt-24'
        to='/get-involved'
      >
        Get Involved
      </Link>
    </div>
  );
};

export default Programs;
