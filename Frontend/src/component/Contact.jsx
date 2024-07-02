import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((prev) => ({
       ...prev,
       [name]:value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('http://localhost:3000/issue', {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        query: contact.query
      });

      if (response.status === 201) {
        alert('Data sent successfully!');
      } else {
        alert('Error sending data');
      }
    } catch (error) {
      alert('Error sending data');
      console.error(error);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      query: ""
    });

  };
  

  return (
    <div className='bg-gradient-to-r from-lime-300 to-purple-500'>
      <p className='font-semibold text-3xl text-center text-amber-800 py-6'>
        Contact Us
      </p>
      <div className='flex flex-col md:flex-row gap-4 justify-center'>
        <div className='w-full md:w-1/2'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.15362938408316!2d84.0843616230564!3d26.556992794292405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993bb002376d059%3A0x6c6f424fcc23a17!2sSBI%20M%2FS%20Aditya%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1716113275520!5m2!1sen!2sin"
            className='h-full w-full border-4 rounded-md border-red-400'
          ></iframe>
        </div>
        <hr className='md:hidden text-red w-full my-4' />
        <div className='w-full md:w-1/2'>
          <div className='bg-gradient-to-tr from-blue-500 to-green-200 p-6 rounded-lg'>
            <h4 className='text-4xl text-pretty font-serif text-center my-10'>
              Ask Your Query <br />
              (अपना प्रश्न पूछें)
            </h4>
            <form className='my-4' onSubmit={handleSubmit} >
              <label htmlFor='name' className='block'>
                Name
              </label>
              <input
                id='name'
                type='text'
                name='name'
                value={contact.name}
                autoComplete="off"
                onChange={HandleInput}
                required
                
                className='w-full h-10 border-2 border-gray-500 rounded-lg my-1 p-2'
              />
              <label htmlFor='email' className='block'>
                E-mail id:
              </label>
              <input
                id='email'
                type='email'
                name='email'
                value={contact.email}
                autoComplete="off"
                onChange={HandleInput}
                required
                className='w-full h-10 border-2 border-gray-500 rounded-lg my-1 p-2'
              />
              <label htmlFor='phone' className='block'>
                Mobile Number:
              </label>
              <input
                id='phone'
                type='number'
                name='phone'
                value={contact.phone}
                
                onChange={HandleInput}
                required
                className='w-full h-10 border-2 border-gray-500 rounded-lg my-1 p-2'
              />
              <label htmlFor='ask' className='block'>
                Raise your Query
              </label>
              <textarea
                id='ask'
                name='query'
                type = 'text'
                value={contact.query}
                autoComplete="off"
                onChange={HandleInput}
                required
                className='w-full h-48 border-4 border-gray-500 rounded-lg my-1 p-2'
                placeholder='Type Your Text...'
              ></textarea>
              <button
                type='submit'
                className='bg-fuchsia-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 focus:outline-none focus:shadow-outline'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
