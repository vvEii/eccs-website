import React from 'react';

const Form = () => {
  return (
    <form className='grid grid-cols-1 gap-6 '>
      <p className='text-base text-black font-light text-left'>Name *</p>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <input type='text' className='rounded-sm bg-gray-100 block' />
          <label className='text-base text-black font-light text-left'>
            First Name
          </label>
        </div>
        <div>
          <input type='text' className='rounded-sm bg-gray-100 block' />
          <label className='text-base text-black font-light text-left'>
            Last Name
          </label>
        </div>
      </div>
      <div className='text-left'>
        <label className='text-base text-black font-light'>Email *</label>
        <input type='text' className='rounded-sm bg-gray-100 block' />
      </div>
      <div className='text-left'>
        <label className='text-base text-black font-light'>Message *</label>
        <textarea type='text' className='resize-y bg-gray-100 block' />
      </div>

      <button className='bg-black text-white text-base font-normal'>
        Submit
      </button>
    </form>
  );
};

export default Form;
