import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PROGRAMS from '../data/programs';

const Programs = () => {
  return (
    <div className='mx-24'>
      <div className='div text-5xl text-black font-medium block mt-40 mb-24'>
        Current Programs
      </div>
      <div className='grid grid-cols-2 gap-10'>
        {PROGRAMS.map((program) => (
          <PostCard
            img={program.img}
            date={program.date}
            title={program.title}
            abstract={program.abstract}
          />
        ))}
      </div>

      <Link
        className='underline text-5xl text-black font-medium block mb-40 mt-24'
        to='/get-involved'
      >
        Get Involved
      </Link>
    </div>
  );
};

export default Programs;
