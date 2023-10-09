


import React, { useRef, useState } from 'react';
import axios from 'axios';

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phone_numberRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState(null); // State for handling errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: ''
   passwordConfirm: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update form_data state with the latest input values
    setFormData({
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phone_numberRef.current.value,
      location: locationRef.current.value,
      password: passwordRef.current.value
      passwordConfirmation: passwordConfirmationRef.current.value
    });

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

  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={nameRef} placeholder='Name:'/>
        <input type="text" ref={emailRef} placeholder='Email:'/>
        <input type="text" ref={phone_numberRef} placeholder='Phone:'/>
        <input type="text" ref={locationRef} placeholder='Locat:'/>
        <input type="text" ref={passwordRef} placeholder='Password:'/>
        <input type="text" ref={passwordConfirmRef} placeholder='Confirm Password:'/>
        <button type='submit'>Submit</button>
        {error && <div>{error}</div>} {/* Display error message */}
      </form>
    </div>
  );
}

export default Form;,



