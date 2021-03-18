import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import programs from '../data/programs';

const Programs = () => {
  return (
    <div>
      <div className='div text-5xl text-black font-medium block mt-40'>
        Current Programs
      </div>
      <PostCard
        title={'test title'}
        date={'12/12/1212'}
        abstract={'asd asd asd asd asd asd asd'}
      />
      <Link
        className='underline text-5xl text-black font-medium block mb-40'
        to='/get-involved'
      >
        Get Involved
      </Link>
    </div>
  );
};

export default Programs;
