import React from 'react';

const About = () => {
  return (
    <>
      <div
        className='bg-no-repeat bg-center bg-cover bg-cover w-screen relative py-40'
        style={{ backgroundImage: 'url(images/bg-about.jpg)' }}
      >
        <p className='text-left font-bold text-6xl text-white pl-24 w-3/4 leading-snug'>
          Since 1950, we have participated in nearly every major public lands
          victory.
        </p>
      </div>

      <span className='text-5xl'>content</span>
    </>
  );
};

export default About;
