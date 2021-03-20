import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex bg-black justify-between w-screen h-2/6 py-10 px-24'>
      <div className='flex flex-col text-white text-left'>
        <span className='font-medium text-xl pb-10'>
          Engaged Communities Canada Society
        </span>
        <span className='text-base pb-1'>12345 street road</span>
        <span className='text-base pb-1'>Vancouver, BC, VVV 123</span>
        <span className='text-base pb-1'>Anouncement</span>
        <span className='text-base pb-1'>
          Powered by Oxus Machine Works Ltd.
        </span>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-col text-white text-left mr-24'>
          <span className='font-medium text-xl pb-10'>Our Work </span>
          <Link className='underline text-base pb-1' to='/about'>
            About
          </Link>
          <Link className='underline text-base pb-1' to='/programs'>
            Programs
          </Link>
          <Link className='underline text-base pb-1' to='/blog'>
            Blog
          </Link>
          <Link className='underline text-base pb-1' to='/contact'>
            Contact Us
          </Link>
        </div>
        <div className='flex flex-col text-white text-left'>
          <span className='font-medium text-xl pb-10'>Follow</span>
          <a
            className='underline text-base pb-1'
            href='https://www.instagram.com/engagedcommunities/'
          >
            Instagram
          </a>
          <a
            className='underline text-base pb-1'
            href='https://www.facebook.com/Engaged-Communities-114376120212298/'
          >
            Facebook
          </a>
          <a
            className='underline text-base pb-1'
            href='https://twitter.com/EngagedCommuni2'
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
