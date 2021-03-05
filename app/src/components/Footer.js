import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex bg-black space-between w-screen h-2/6 p-10'>
      <div className='flex flex-col flex-1 text-white text-left ml-24'>
        <span className='font-black text-xl pb-10'>
          Engaged Communities Canada Society
        </span>
        <span>12345 street road</span>
        <span>Vancouver, BC, VVV 123</span>
        <span>Made with OMW</span>
      </div>
      <div className='flex flex-col flex-1 text-white text-left'>
        <span className='font-black text-xl pb-10'>Our Work </span>
        <Link className='underline' to='/blog'>
          Blog
        </Link>
        <Link className='underline' to='/about'>
          About
        </Link>
        <Link className='underline' to='/programs'>
          Programs
        </Link>
        <Link className='underline' to='/contact'>
          Contact Us
        </Link>
      </div>
      <div className='flex flex-col flex-1 text-white text-left'>
        <span className='font-black text-xl pb-10'>Follow</span>
        <a className='underline' href='https://twitter.com/EngagedCommuni2'>
          Twitter
        </a>
        <a
          className='underline'
          href='https://www.facebook.com/Engaged-Communities-114376120212298/'
        >
          Facebook
        </a>
        <a
          className='underline'
          href='https://www.instagram.com/engagedcommunities/'
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
