import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div
      className='min-h-screen flex relative bg-cover py-36 md:py-52 '
      style={{
        backgroundImage: 'url(images/bg-landing-page.jpg)',
      }}
    >
      {/* <img
        src='/images/bg-landing-page.jpg'
        alt=''
        className='object-cover h-screen w-screen'
      /> */}
      <div
        className='absolute inset-0 opacity-50 '
        style={{ backgroundColor: '#2a2829' }}
      ></div>
      <div className='grid grid-cols-1 gap-y-10 items-center text-white z-10 px-6 md:px-12 lg:px-40 2xl:px-96 text-left md:grid-cols-3 md:gap-10'>
        <div>
          <p className='text-3xl pb-6 md:text-4xl font-medium md:pb-10'>
            Donate
          </p>
          <p className='font-extralight  text-base md:text-lg pb-10'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <Link
            to='/get-involved/donate'
            className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none '
          >
            Donate
          </Link>
        </div>
        <div>
          <p className='text-3xl pb-6 md:text-4xl font-medium md:pb-10'>
            Partnership
          </p>
          <p className='font-extralight text-base md:text-lg pb-10'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <Link
            to='/get-involved/partnership'
            className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none '
          >
            Partnership
          </Link>
        </div>
        <div>
          <p className='text-3xl pb-6 md:text-4xl font-medium md:pb-10'>
            Volunteer & Employment
          </p>
          <p className='font-extralight text-base md:text-lg pb-10'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
          <Link
            to='/get-involved/volunteer-employment'
            className='bg-white text-sm text-black px-7 py-4 my-10 font-medium hover:bg-gray-200 transition ease-in-out duration-700 focus:outline-none '
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
