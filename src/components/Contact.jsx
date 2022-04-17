import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen'>
        <div className='h-full w-full flex flex-col text-center justify-center items-center p-4'>
             <form method='POST' className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/cd36bdee-dfd4-4d8c-a56c-62421e32d3ea">
                <p className='text-4xl font-bold inline border-b-4 border-[#1E2640] py-4'>
                    Contact
                </p>
                <p className='py-4'> <i>Submit the form below for any prayer request or words of encouragement.</i> </p>
                <input className='p-4  text-black bg-[#F9F6F0]' type="text" placeholder='Name' name='name' />
                <input className='p-4 my-4 bg-[#F9F6F0]' type="text" placeholder='Email' name='email' />
                <textarea className='p-4 bg-[#F9F6F0]' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                <button className='border-4 text-white bg-[#1E2640] hover:bg-black mx-auto px-4 py-4 my-8'>
                    Let's Glorify Jesus
                </button>
             </form>
        </div>
    </div>
  );
};

export default Contact;