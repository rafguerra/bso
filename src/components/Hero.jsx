import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div name='home' className='max-w-[1000px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-4xl font-bold p-2'>Reaching Every Generation with the Gospel of </h1>
        <Typed className='text-4xl font-bold' loop typeSpeed={120} strings={['Jesus', 'Christ', ]}/>
        <i className='font-bold p-2'>"Let your light shine before men, that they may see your good works, and glorify your Father which is in heaven." - Matthew 5:16</i>
        <p></p>
    </div>
  )
}

export default Hero