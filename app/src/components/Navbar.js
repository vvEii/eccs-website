import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // TIPs about react hook:
  // 1. react hooks must be called in the component body
  // 2. react hooks can't be called conditionally

  const currentPath = useLocation().pathname;
  const navDisplay = currentPath === '/mobile-menu' ? 'hidden-nav' : '';

  return (
    <nav
      className={
        currentPath === '/' ||
        currentPath === '/about' ||
        currentPath === '/get-involved'
          ? `nav-white ${navDisplay}`
          : `nav-black ${navDisplay}`
      }
      role='navigation'
    >
      <Link to='/' className='text-2xl md:text-4xl font-normal w-1/4 text-left'>
        ECCS
      </Link>

      <Link to='/mobile-menu' className=''>
        <svg
          className='w-8 h-8 md:hidden'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          <path
            d='M501.333,96H10.667C4.779,96,0,100.779,0,106.667s4.779,10.667,10.667,10.667h490.667c5.888,0,10.667-4.779,10.667-10.667
			S507.221,96,501.333,96z'
          />
          <path
            d='M501.333,245.333H10.667C4.779,245.333,0,250.112,0,256s4.779,10.667,10.667,10.667h490.667
			c5.888,0,10.667-4.779,10.667-10.667S507.221,245.333,501.333,245.333z'
          />
          <path
            d='M501.333,394.667H10.667C4.779,394.667,0,399.445,0,405.333C0,411.221,4.779,416,10.667,416h490.667
			c5.888,0,10.667-4.779,10.667-10.667C512,399.445,507.221,394.667,501.333,394.667z'
          />
        </svg>
      </Link>

      <div className='justify-between items-center w-9/12 text-base font-light hidden md:flex xl:w-8/12'>
        <Link
          className={
            currentPath === '/about'
              ? 'font-light border-b border-white pb-1'
              : 'font-light'
          }
          to='/about'
        >
          About
        </Link>
        <Link
          className={
            currentPath === '/programs'
              ? 'font-light border-b border-black pb-1'
              : 'font-light'
          }
          to='/programs'
        >
          Programs
        </Link>
        <Link
          className={
            currentPath === '/blog'
              ? 'font-light border-b border-black pb-1'
              : 'font-light'
          }
          to='/blog'
        >
          Blog
        </Link>
        <Link
          className={
            currentPath === '/contact'
              ? 'font-light border-b border-black pb-1'
              : 'font-light'
          }
          to='/contact'
        >
          Contact Us
        </Link>
        <a href='https://www.instagram.com/engagedcommunities/'>
          {/* outline style instagram icon */}
          {/* <svg
          className='w-5 h-5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
          ></path>
        </svg> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z'
            />
          </svg>
        </a>
        <a href='https://www.facebook.com/Engaged-Communities-114376120212298/'>
          <svg
            className='w-5 h-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path
              fill='currentColor'
              d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
            ></path>
          </svg>
        </a>

        <a href='https://twitter.com/EngagedCommuni2'>
          <svg
            className='w-5 h-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
            ></path>
          </svg>
        </a>
        <Link
          to='/get-involved'
          className={
            currentPath === '/' ||
            currentPath === '/about' ||
            currentPath === '/get-involved'
              ? 'get-involved-btn-white'
              : 'get-involved-btn-black'
          }
        >
          Get Involved
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
