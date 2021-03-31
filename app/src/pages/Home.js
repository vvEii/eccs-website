import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className='bg-no-repeat bg-center bg-cover w-auto h-screen'
        style={{
          backgroundImage: 'url(images/bg-landing-page.jpg)',
        }}
      >
        <div className='flex flex-col absolute bottom-24 px-24 lg:px-60 2xl:px-96'>
          <p className='text-5xl text-white font-normal mb-10 text-left leading-normal pr-24'>
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
      <div className='flex justify-between items-center w-screen bg-test px-24 lg:px-60 2xl:px-96 py-12'>
        <p className='font-medium text-black text-4xl text-left leading-normal '>
          Engaged Communities Canada Society Engaged Communities Canada Society
          Engaged Communities Canada Society
        </p>
        <p className='text-black text-2xl font-light text-left leading-loose'>
          Our mission is to create international consensus around the climate
          emergency, as well a shared plan for saving the planet’s most
          exceptional wild places.
        </p>
      </div>
      <div className='flex justify-between px-24 lg:px-60 2xl:px-96 py-20'>
        <div className='flex flex-col flex-1 pr-24'>
          <p className='text-black text-left text-4xl font-normal leading-normal pt-24'>
            Chanaasdsdging the world is possible. We’asdasdasdve done it before.
          </p>
          <p className='text-black text-lg text-left font-light py-12'>
            Our leadership team bring years of experience to bear on the
            greatest challenge of our time. We’re results driven, with a proven
            record of previous successes.
          </p>
          <Link
            to='/about'
            className='bg-black text-base text-white px-7 py-4 font-medium hover:bg-gray-300 w-2/6 transition ease-in-out duration-700'
          >
            Learn More
          </Link>
        </div>
        <img
          src='images/content-landing-page.jpg'
          alt=''
          className='w-1 flex-1 py-10 pl-10'
        />
      </div>
    </>
  );
};

export default Home;
