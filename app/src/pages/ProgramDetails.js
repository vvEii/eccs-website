import React from 'react';

const ProgramDetails = (props) => {
  const program = props.location.programProps;
  return (
    <div className='flex flex-col justify-items-center items-start mx-24 my-48'>
      <p className='text-4xl font-normal md:text-5xl md:font-medium mb-12'>
        {program.title}
      </p>
      <p className='text-base text-black block whitespace-pre-wrap text-left font-light'>
        {program.content}
      </p>
    </div>
  );
};

export default ProgramDetails;
