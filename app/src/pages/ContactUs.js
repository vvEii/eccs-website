import React from 'react';
import Form from '../components/Form';

const ContactUs = () => {
  return (
    <div className='mx-24 mt-40 mb-28 grid grid-cols-2 justify-items-center items-center'>
      <div className='flex flex-col items-start'>
        <p className='text-5xl font-medium text-black pb-8'>Contact Us</p>
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
