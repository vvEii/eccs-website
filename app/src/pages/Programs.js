import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import PROGRAMS from '../data/programs';

const Programs = () => {
  return (
    <div className='px-4 md:px-12 lg:px-40 2xl:px-96'>
      <div className='div text-3xl font-normal mb-12 md:text-5xl text-black md:font-medium block mt-40 md:mb-24'>
        Current Programs
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {PROGRAMS.map((program, index) => (
          <ProgramCard
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
