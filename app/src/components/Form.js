import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(firstname + lastname + email + message);
    const params = {
      firstname,
      lastname,
      email,
      message,
    };
    emailjs
      .send(
        'service_0c3r61p',
        'template_gnlwi9c',
        params,
        'user_4C6MbHkzQddnZAqzXJwcr'
      )
      .then((res) => console.log('SUCCESS' + res.status, res.text))
      .catch((err) => console.log(err));
  };
  return (
    <form className='grid w-full' onSubmit={(e) => e.preventDefault()}>
      <p className='text-base text-black font-light text-left'>Name *</p>
      <div className='grid grid-cols-2 gap-4 '>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label className='text-sm text-black font-light'>First Name</label>
        </div>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black  bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label className='text-sm text-black font-light'>Last Name</label>
        </div>
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Email *</label>
        <input
          type='text'
          className='pl-2 text-base text-black  bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Message *</label>
        <textarea
          type='text'
          className='pl-2 pt-2 text-base text-black resize-y bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        className='bg-black text-white text-xl font-medium mt-14 h-full focus:outline-none active:bg-gray-400'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
