import React from 'react';

const Form = () => {
  return (
    <div className='flex flex-col '>
      <div>
        <p className='text-sm text-black'>Name*</p>
        <input type='text' className='rounded-sm' />
        <input type='text' className='rounded-sm' />
      </div>
      <input type='text' className='rounded-sm' />
      <input type='text' className='resize-y' />
    </div>
  );
};

export default Form;
