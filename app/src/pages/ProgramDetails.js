import React from 'react';

const ProgramDetails = (props) => {
  const program = props.location.programProps;
  return (
    <div className='flex flex-col justify-items-center items-start mx-24 my-48 max-w-screen-md'>
      <p className='text-sm'>{program.date}</p>
      <p className='text-4xl'>{program.title}</p>
      <p className='text-base text-black block'>{program.content}</p>
    </div>
  );
};

export default ProgramDetails;
