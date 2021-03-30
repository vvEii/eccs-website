import React from 'react';

const GetInvolved = () => {
  return (
    <div className='h-screen'>
      <img
        src='/images/bg-landing-page.jpg'
        alt=''
        className='object-cover h-screen w-screen'
      />
      <div
        className='absolute inset-0 opacity-50'
        style={{ backgroundColor: '#2a2829' }}
      ></div>

      <div className='absolute inset-0 grid grid-cols-1 items-center text-white mx-24 text-left md:grid-cols-3 md:gap-10'>
        <div className=''>
          <p className='text-4xl font-medium py-10'>Donate</p>
          <p className='font-extralight text-lg'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <button className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none'>
            Donate
          </button>
        </div>
        <div className=''>
          <p className='text-4xl font-medium py-10'>Parternership</p>
          <p className='font-extralight text-lg'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <button className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none'>
            Parternership
          </button>
        </div>
        <div className=''>
          <p className='text-4xl font-medium py-10'>
            Volunteer & Employment Opportunities
          </p>
          <p className='font-extralight text-lg'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <button className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none'>
            Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
