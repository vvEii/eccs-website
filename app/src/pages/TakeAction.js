import React from 'react';

const TakeAction = () => {
  return (
    <div>
      <div className='overflow-hidden max-h-screen'>
        <img
          src='/images/bg-landing-page.jpg'
          alt=''
          className='object-cover relative'
        />
        <div
          className='absolute inset-0 opacity-50'
          style={{ backgroundColor: '#2a2829' }}
        ></div>
      </div>

      <div className='flex items-center z-10 absolute inset-0 text-white mx-24 text-left '>
        <div className='flex-1'>
          <p className='text-4xl font-medium py-10'>Donate</p>
          <p className='font-extralight text-lg'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <button className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700'>
            Donate
          </button>
        </div>
        <div className='flex-1'></div>
        <div className='flex-1'>
          <p className='text-4xl font-medium py-10'>Volunteer</p>
          <p className='font-extralight text-lg'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <button className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700'>
            Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
