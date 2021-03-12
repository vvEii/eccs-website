import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex bg-black justify-between w-screen h-2/6 py-10 px-24'>
      <div className='flex flex-col text-white text-left'>
        <span className='font-medium text-xl pb-10'>
          Engaged Communities Canada Society
        </span>
        <span>12345 street road</span>
        <span>Vancouver, BC, VVV 123</span>
        <span>Made with OMW</span>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-col text-white text-left mr-24'>
          <span className='font-medium text-xl pb-10'>Our Work </span>
          <Link className='underline' to='/about'>
            About
          </Link>
          <Link className='underline' to='/programs'>
            Programs
          </Link>
          <Link className='underline' to='/blog'>
            Blog
          </Link>
          <Link className='underline' to='/contact'>
            Contact Us
          </Link>
        </div>
        <div className='flex flex-col text-white text-left'>
          <span className='font-medium text-xl pb-10'>Follow</span>
          <a
            className='underline'
            href='https://www.instagram.com/engagedcommunities/'
          >
            Instagram
          </a>
          <a
            className='underline'
            href='https://www.facebook.com/Engaged-Communities-114376120212298/'
          >
            Facebook
          </a>
          <a className='underline' href='https://twitter.com/EngagedCommuni2'>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
