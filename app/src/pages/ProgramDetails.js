import React from 'react';
import ForwardTab from '../components/ForwardTab';
import BackTab from '../components/BackTab';
import PROGRAMS from '../data/programs';
import { Link } from 'react-router-dom';

const ProgramDetails = (props) => {
  const program = props.location.programProps;
  const currentProgramIndex = program.index;

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col justify-center items-start h-screen mx-12 md:mx-24 md:w-3/4'>
        <p className='text-4xl font-normal md:text-6xl md:font-medium mb-12'>
          {program.title}
        </p>
        <p className='text-base text-black block whitespace-pre-wrap text-left font-light'>
          {program.content}
        </p>
        <div className='flex justify-between w-full mt-20'>
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
    </div>
  );
};

export default ProgramDetails;
