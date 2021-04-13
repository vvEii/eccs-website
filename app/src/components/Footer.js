import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='flex bg-black flex-col space-y-12 px-6 md:flex-row md:space-y-0 justify-between w-screen h-2/6 py-10 md:px-12 lg:px-40 2xl:px-96'>
        <div className='flex flex-col text-white text-left md:w-1/2'>
          <span className='font-normal text-xl pb-10'>
            Engaged Communities Canada Society
          </span>
          <span className='text-base font-extralight pb-1'>
            12345 street road
          </span>
          <span className='text-base font-extralight pb-1'>
            Vancouver, BC, VVV 123
          </span>
          <span className='text-base font-extralight pt-6'>
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more.
          </span>
        </div>
        <div className='flex flex-col space-y-12 md:space-y-0 md:flex-row justify-between '>
          <div className='flex flex-col text-white text-left mr-24'>
            <span className='font-normal text-xl pb-10'>Our Work </span>
            <Link
              className='underline text-base pb-1 font-extralight'
              to='/about'
            >
              About
            </Link>
            <Link
              className='underline text-base pb-1 font-extralight'
              to='/programs'
            >
              Programs
            </Link>
            <Link
              className='underline text-base pb-1 font-extralight'
              to='/blog'
            >
              Blog
            </Link>
            <Link
              className='underline text-base pb-1 font-extralight'
              to='/contact'
            >
              Contact Us
            </Link>
            <Link
              className='underline text-base pb-1 font-extralight'
              to='/get-involved'
            >
              Get Involved
            </Link>
          </div>
          <div className='flex flex-col text-white text-left'>
            <span className='font-normal text-xl pb-10'>Follow</span>
            <a
              className='underline text-base pb-1 font-extralight'
              href='https://www.instagram.com/engagedcommunities/'
            >
              Instagram
            </a>
            <a
              className='underline text-base pb-1 font-extralight'
              href='https://www.facebook.com/Engaged-Communities-114376120212298/'
            >
              Facebook
            </a>
            <a
              className='underline text-base pb-1 font-extralight'
              href='https://twitter.com/EngagedCommuni2'
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <span className='text-sm bg-black w-screen text-white font-extralight block pb-6'>
        Powered by Oxus Machine Works Ltd.
      </span>
    </>
  );
};

export default Footer;
