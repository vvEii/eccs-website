import React from 'react';

const Form = () => {
  return (
    <form className='grid w-full'>
      <p className='text-base text-black font-light text-left'>Name *</p>
      <div className='grid grid-cols-2 gap-4 '>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          />
          <label className='text-sm text-black font-light'>First Name</label>
        </div>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black  bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          />
          <label className='text-sm text-black font-light'>Last Name</label>
        </div>
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Email *</label>
        <input
          type='text'
          className='pl-2 text-base text-black  bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
        />
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Message *</label>
        <textarea
          type='text'
          className='pl-2 pt-2 text-base text-black resize-y bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
        />
      </div>

      <button className='bg-black text-white text-xl font-medium mt-14 h-full'>
        Submit
      </button>
    </form>
  );
};

export default Form;
