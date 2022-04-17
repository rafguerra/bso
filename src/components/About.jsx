import React from 'react'
import Typed from 'react-typed'

const About = () => {
  return (
    <div name='about' className='w-full h-[70%] bg-black  py-16 px-4'>
      <div className='max-w-[1000px] p-4 text-white mx-auto'>
        <h1 className='text-3xl'>
            BIBLE STUDY OUTREACH IS AN OUTREACH MINISTRY THAT FOCUSES ON 
         </h1>
        <Typed className='text-4xl font-bold' loop typeSpeed={120} strings={['SPIRITUAL TRANFORMATION', 'EVANGELISM', 'DISCIPLESHIP', 'COMMUNITY DEVELOPMENT', 'FEEDING PROGRAMS', 'TRAININGS', 'LIVELIHOOD' ]}/>   
      </div>
    </div>
  )
}

export default About;