import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center h-16 absolute inset-0 text-white px-24 py-16'
      role='navigation'
    >
      <Link to='/' className='text-3xl font-black'>
        ECCS
      </Link>
      <Link className='p-4'>Blog</Link>
      <Link to='/about' className='p-4'>
        About
      </Link>
      <Link className='p-4'>Programs</Link>
      <Link className='p-4'>Contact Us</Link>
      <Link className='bg-white text-black px-6 py-4 font-black hover:bg-gray-100'>
        Take Action
      </Link>
    </nav>
  );
};

export default Navbar;
