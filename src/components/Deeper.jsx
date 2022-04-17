import React from 'react'

const Deeper = () => {
  return (
     <div name='deeper' className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h1 className='text-4xl font-bold text-center py-8'>Mision</h1>
              <p className='text-center text-[#FF0000] text-3xl font-bold'>BRING</p>
              <p className='text-center text-2xl font-bold'>people to Jesus by bringing them through mission outreach in different locations.</p>
              <p className='text-center text-[#FF0000] text-3xl pt-4 font-bold'>SHOW</p>
              <p className='text-center text-2xl font-bold'>compassion to the lost by empowering them through equipping, discipleship , and livelihood trainings</p>
              <p className='text-center text-[#FF0000] text-3xl pt-4 font-bold'>OFFER</p>
              <p className='text-center text-2xl font-bold'>ministry opportunities for God's people to serve by using their God given Spiritual Gifts.</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h1 className='text-4xl font-bold text-center py-8'>Vision</h1>
                <p className='text-center text-2xl font-bold'>
                  To see marginalized communities being transformed being transformed for 
                  the Glory of God.
                </p>
          </div>
      </div>
    </div>
  )
}

export default Deeper