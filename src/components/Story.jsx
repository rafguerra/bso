import React from 'react'
import Team from '../assets/Team.png';

const Story = () => {
  return (
    <div name='story' className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Team} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold p-2 border-b-8 border-[#6F5B3E]'>His Story</h1>
                <p className='p-4 font-bold'> The Beginning - 2017</p>
                <p className='p-4 font-bold'>
                Bible Study Outreach (BS) began in
                August 2017 in TS Cruz Subdivision, in
                the garage of Ptr. Jonar Garcia's parents
                where he and his wife. Grace, currently
                reside. Before BSO. Ptr. Jonar was the
                youth pastor of the youth and student
                ministry in their former church. They
                were called by God to start a new
                journey in their ministry lives and so they
                heeded the call and followed the Lord's
                direction. Thus, BS was established.
                One Wednesday, a teen named Rhea
                walked past their house and so Grace
                asked her if she's available on Saturday for
                a bible study and she excitedly answered
                *Opo (Yes). I will invite others as well!"
                Rhea was one of the kids who attended
                Grace's summer vacation Bible study in
                2012 on her free time. It was a brief time of
                sharing God's word to these children yet it
                was God's way of preparing them for His
                plans. Who would have thought that after 5
                years [and those years. Ptr. Jonar and Crace
                lost communication with them due to
                other ministry work]. these kids will be
                involved again in the new ministry that
                God is calling them? And then came
                Saturday. August 13, 2017. Rhea came with
                her friends and siblings and some kids in
                the neighborhood were invited, too. That's
                when and how BSO started.
                </p>
                <p className='p-4 font-bold'>
                Ptr. Jonar and Grace were joined by three
                like-minded people, Hiroshi Yano. Mary
                Tibayan and Katrine Grace Roxas. They
                began with this small team and now they
                are a team of 12 people plus pool of
                volunteers.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Story