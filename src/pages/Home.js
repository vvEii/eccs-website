import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className=' bg-center bg-cover h-screen '
        style={{
          backgroundImage: 'url(images/bg-landing-page.jpg)',
        }}
      >
        <div
          className='absolute inset-0 opacity-20 '
          style={{ backgroundColor: '#2a2829' }}
        ></div>
        <div className='flex flex-col absolute bottom-24 px-6 md:px-12 lg:px-40 2xl:px-96'>
          <p className='text-3xl md:text-5xl text-white font-normal mb-10 text-left leading-normal md:pr-24'>
            Help our communities with love and passion
          </p>
          <Link
            to='/about'
            className='bg-white text-black text-base py-4 font-medium w-40 hover:bg-gray-200 transition ease-in-out duration-700'
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className='flex flex-col space-y-10 md:flex-row md:space-y-0 justify-between items-center w-screen bg-test px-6 md:px-12 lg:px-40 2xl:px-96 py-12'>
        <p className='font-medium text-black text-2xl md:text-4xl text-left leading-normal md:pr-4'>
          Engaged Communities Canada Society Engaged Communities Canada Society
          Engaged Communities Canada Society
        </p>
        <p className='text-black text-lg md:text-2xl font-light text-left leading-loose md:pl-4'>
          Our mission is to create international consensus around the climate
          emergency, as well a shared plan for saving the planet’s most
          exceptional wild places.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between px-6 py-6 md:px-12 lg:px-40 2xl:px-96 md:py-20'>
        <div className='flex flex-col flex-1 md:pr-24'>
          <p className='text-black text-left text-2xl md:text-4xl font-normal leading-normal md:pt-24'>
            Chanaasdsdging the world is possible. We’asdasdasdve done it before.
          </p>
          <p className='text-black text-lg text-left font-light py-12'>
            Our leadership team bring years of experience to bear on the
            greatest challenge of our time. We’re results driven, with a proven
            record of previous successes.
          </p>
          <Link
            to='/about'
            className='bg-black text-base text-white px-7 py-4 font-medium w-1/2 hover:bg-gray-300 lg:w-2/6 transition ease-in-out duration-700'
          >
            Learn More
          </Link>
        </div>
        <img
          src='images/content-landing-page.jpg'
          alt=''
          className='w-screen md:w-1/2 flex-1 py-10 md:pl-10'
        />
      </div>
    </>
  );
};

export default Home;
