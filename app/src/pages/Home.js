import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className='bg-no-repeat bg-center bg-cover w-auto h-screen py-8'
        style={{
          backgroundImage: 'url(images/bg-landing-page.jpg)',
        }}
      >
        <div className='flex flex-col absolute bottom-40'>
          <p className='text-5xl text-white font-normal pl-24 w-3/5 mb-10 text-left leading-normal'>
            Help our communities with love and passion
          </p>
          <Link
            to='/about'
            className='bg-white text-black px-6 py-4 font-medium w-40 ml-24 hover:bg-gray-100'
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className='flex  items-center w-screen bg-test px-24 py-12'>
        <p className='font-medium text-black text-3xl text-left leading-normal pr-20'>
          Engaged Communities Canada Society Engaged Communities Canada Society
          Engaged Communities Canada Society
        </p>
        <p className='text-black text-xl font-light text-left leading-loose pl-20'>
          Our mission is to create international consensus around the climate
          emergency, as well a shared plan for saving the planet’s most
          exceptional wild places.
        </p>
      </div>
    </>
  );
};

export default Home;
