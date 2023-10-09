
import React, { useRef } from 'react';
import axios from 'axios';

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phone_numberRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();
    
  const handleSubmit = async (e) => {
    e.preventDefault();
        
    const form_data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phone_numberRef.current.value,
      location: locationRef.current.value,
      password: passwordRef.current.value
    };

    try {
      const res = await axios.post("http://localhost:3000/register", form_data);
      console.log('Response from server:', res.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error from server:', error);
      // Handle error, e.g., show an error message to the user
    }
    if (error.response) {
      console.log('Validation errors:', error.response.data.error);
    }
  };

  console.log(form_data);


  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={nameRef} placeholder='Name:'/>
        <input type="text" ref={emailRef} placeholder='Email:'/>
        <input type="text" ref={phone_numberRef} placeholder='Phone:'/>
        <input type="text" ref={locationRef} placeholder='Locat:'/>
        <input type="text" ref={passwordRef} placeholder='Password:'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;