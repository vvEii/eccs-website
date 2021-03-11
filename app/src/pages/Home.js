import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className='bg-no-repeat bg-center bg-cover w-auto h-screen py-8 relative'
        style={{
          backgroundImage:
            'url(https://images.squarespace-cdn.com/content/5d375649e2ffc000016e0aec/1566216421263-WABITDNT9SVT641I149X/20140302_Trade%2B151_0503.jpg?format=2500w&content-type=image%2Fjpeg)',
        }}
      >
        <div className='flex flex-col absolute bottom-40'>
          <span className='text-5xl text-white font-bold pl-24 w-3/5 mb-10 text-left leading-normal'>
            Help our communities with love and passion
          </span>
          <Link
            to='/about'
            className='bg-white text-black px-6 py-4 font-black w-40 ml-24 hover:bg-gray-100'
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className='flex justify-between items-center w-screen bg-test px-24 py-12'>
        <span className='font-bold text-black text-4xl text-left leading-normal pr-12'>
          Engaged Communities Canada Society Engaged Communities Canada Society
          Engaged Communities Canada Society
        </span>
        <span className='text-black text-xl text-left leading-loose pl-12'>
          Our mission is to create international consensus around the climate
          emergency, as well a shared plan for saving the planet’s most
          exceptional wild places.
        </span>
      </div>
    </>
  );
};

export default Home;
