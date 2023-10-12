

import React, { useRef, useState } from 'react';
import axios from 'axios';

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    location: '',
    password: '',
    password_confirmation: '' // Changed to match Rails controller parameter
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      user: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone_number: phoneRef.current.value,
        location: locationRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmRef.current.value
      }
    };
  
    try {
      const res = await axios.post("http://localhost:3000/register", formData);
      console.log('Response from server:', res.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error from server:', error);
      // Handle error, e.g., show an error message to the user
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };
  

  console.log(formData)

  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={nameRef} placeholder='Name:'/>
        <input type="text" ref={emailRef} placeholder='Email:'/>
        <input type="text" ref={phoneRef} placeholder='Phone:'/>
        <input type="text" ref={locationRef} placeholder='Location:'/>
        <input type="password" ref={passwordRef} placeholder='Password:'/>
        <input type="password" ref={passwordConfirmRef} placeholder='Confirm Password:'/>
        <button type='submit'>Submit</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Form;

