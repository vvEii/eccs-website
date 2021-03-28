import React from 'react';
import ForwardTab from '../components/ForwardTab';
import BackTab from '../components/BackTab';
import PROGRAMS from '../data/programs';

const ProgramDetails = (props) => {
  const program = props.location.programProps;
  const currentProgramIndex = program.index;

  return (
    <div className='flex flex-col justify-items-center items-start mx-24 my-48'>
      <p className='text-4xl font-normal md:text-5xl md:font-medium mb-12'>
        {program.title}
      </p>
      <p className='text-base text-black block whitespace-pre-wrap text-left font-light'>
        {program.content}
      </p>
      {currentProgramIndex !== PROGRAMS.length - 1 && (
        <ForwardTab title={PROGRAMS[currentProgramIndex + 1].title} />
      )}

      {currentProgramIndex && (
        <BackTab title={PROGRAMS[currentProgramIndex - 1].title} />
      )}
    </div>
  );
};

export default ProgramDetails;
