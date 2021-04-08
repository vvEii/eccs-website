import React from 'react';
import ForwardTab from '../components/ForwardTab';
import BackTab from '../components/BackTab';
import PROGRAMS from '../data/programs';
import { Link } from 'react-router-dom';

const ProgramDetails = (props) => {
  const program = props.location.programProps;
  const currentProgramIndex = program.index;

  return (
    <div className='grid grid-col-1 place-content-stretch min-h-screen'>
      <div className='flex flex-col justify-center items-start mx-4 pt-32 md:px-12 md:w-1/2 md:pt-32 justify-self-center'>
        <p className='text-3xl font-normal md:text-6xl md:font-medium mb-12'>
          {program.title}
        </p>
        <p className='text-base text-black block whitespace-pre-wrap text-left font-light'>
          {program.content}
        </p>
      </div>
      <div className='flex justify-between w-screen py-10 md:px-20 md:py-16 md:w-full justify-self-center place-self-end'>
        {currentProgramIndex ? (
          <Link
            to={{
              pathname: `/program-details/${
                PROGRAMS[currentProgramIndex - 1].id
              }`,
              programProps: {
                content: PROGRAMS[currentProgramIndex - 1].content,
                title: PROGRAMS[currentProgramIndex - 1].title,
                index: currentProgramIndex - 1,
              },
            }}
          >
            <BackTab title={PROGRAMS[currentProgramIndex - 1].title} />
          </Link>
        ) : (
          <div></div>
        )}
        {currentProgramIndex !== PROGRAMS.length - 1 && (
          <Link
            to={{
              pathname: `/program-details/${
                PROGRAMS[currentProgramIndex + 1].id
              }`,
              programProps: {
                content: PROGRAMS[currentProgramIndex + 1].content,
                title: PROGRAMS[currentProgramIndex + 1].title,
                index: currentProgramIndex + 1,
              },
            }}
          >
            <ForwardTab title={PROGRAMS[currentProgramIndex + 1].title} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProgramDetails;
