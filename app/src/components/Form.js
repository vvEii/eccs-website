import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const Form = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [emailFormatAlert, setEmailFormatAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = () => {
    if (!firstname || !lastname) {
      setNameAlert(true);
      return;
    }
    if (!email) {
      setEmailAlert(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailFormatAlert(true);
      return;
    }
    if (!message) {
      setMessageAlert(true);
      return;
    }

    const params = {
      firstname,
      lastname,
      email,
      message,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
      .then((res) => {
        if (res.status === 200) {
          //changinf the text of button
          setSuccessAlert(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className='grid w-full' onSubmit={(e) => e.preventDefault()}>
      <p className='text-base text-black font-light text-left inline'>
        Name *
        {nameAlert ? (
          <span className='text-base text-red-400 ml-4'>
            Please fill both First Name and Last Name.
          </span>
        ) : (
          <></>
        )}
      </p>

      <div className='grid grid-cols-2 gap-4 '>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
            value={firstname}
            onChange={(e) => {
              e.target.value ? setNameAlert(false) : setNameAlert(true);
              setFirstname(e.target.value);
            }}
          />
          <label className='text-sm text-black font-light'>First Name</label>
        </div>
        <div className='text-left'>
          <input
            type='text'
            className='pl-2 text-base text-black  bg-gray-100 block w-full h-full mb-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
            value={lastname}
            onChange={(e) => {
              e.target.value ? setNameAlert(false) : setNameAlert(true);
              setLastname(e.target.value);
            }}
          />
          <label className='text-sm text-black font-light'>Last Name</label>
        </div>
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Email *</label>{' '}
        {emailAlert ? (
          <span className='text-base font-light text-red-400 ml-4'>
            Please fill your email address.
          </span>
        ) : (
          <></>
        )}
        {emailFormatAlert ? (
          <span className='text-base font-light text-red-400 ml-4'>
            Please use correct email format.
          </span>
        ) : (
          <></>
        )}
        <input
          type='text'
          className='pl-2 text-base text-black  bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          value={email}
          onChange={(e) => {
            e.target.value ? setEmailAlert(false) : setEmailAlert(true);

            validateEmail(e.target.value)
              ? setEmailFormatAlert(false)
              : setEmailFormatAlert(true);
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className='text-left mt-14'>
        <label className='text-base text-black font-light'>Message *</label>
        {messageAlert ? (
          <span className='text-base font-light text-red-400 ml-4'>
            Message can't be empty.
          </span>
        ) : (
          <></>
        )}
        <textarea
          type='text'
          className='pl-2 pt-2 text-base text-black resize-y bg-gray-100 block w-full h-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4'
          value={message}
          onChange={(e) => {
            e.target.value ? setMessageAlert(false) : setMessageAlert(true);
            setMessage(e.target.value);
          }}
        />
      </div>

      <button
        className='bg-black text-white text-xl font-medium mt-14 h-full focus:outline-none active:bg-gray-400'
        onClick={handleSubmit}
      >
        {successAlert ? 'You have successfully submited message!' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
