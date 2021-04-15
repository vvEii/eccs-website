import React from 'react';
import Form from '../components/Form';

const ContactUs = () => {
  return (
    <div className='px-6 grid grid-cols-1 gap-4 place-items-center md:h-screen pt-40 mb-48 md:grid-cols-2 md:px-12 md:mb-0 md:pt-0 lg:px-40 2xl:px-96'>
      <div className='flex flex-col items-start'>
        <p className='text-3xl md:text-5xl font-medium text-black pb-8'>
          Contact Us
        </p>
        <p className='text-base font-light text-black text-left pr-20 pb-8 leading-7'>
          A better future is possible. Contact us to learn more about our
          mission and work, or to become involved yourself.
        </p>
        <p className='text-base font-light text-black text-left pb-8 leading-7'>
          email@example.com <br />
          555-555-5555
        </p>
        <p className='text-base font-light text-black text-left leading-7'>
          12345 street road <br /> Vancouver BC VVV 123
        </p>
      </div>
      <Form />
    </div>
  );
};

export default ContactUs;
