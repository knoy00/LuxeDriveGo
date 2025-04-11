import React from 'react'
import manAnimate from '../assets/images/man_animate.jpeg'
import GetStartedBtn from '../components/GetStartedBtn'
import Women from '../assets/images/women.png'

function NewFeatures() {
  return (
    <div className='w-full bg-black text-white py-20 mt-20'>
      <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-4xl'>What's New?</h1>
        <div className='mt-20'>
            <div  className='flex justify-center items-center gap-x-30 mb-10'>
                <img src={manAnimate} alt="Man in couch" className='w-120 rounded-4xl'/>
                <div>
                    <h1 className='text-4xl font-semibold mb-10'>Ride Scheduling</h1>
                    <p className='text-[18px]'>
                        Plan ahead with ease - our new Ride Scheduling feature lets you book your trips in advance, so you're alwayas on time, every, time.
                    </p>
                    <GetStartedBtn />
                </div>
            </div>
            <div  className='flex justify-center items-center gap-x-30 mb-10'>
                <div>
                    <h1 className='text-4xl font-semibold mb-10'>Safety PIN</h1>
                    <p className='text-[18px]'>
                        For added security, every ride now comes with a unique 4-digit Safety PIN. Before your trip begins, share this PIN with your driver to ensure you're in the right ride. This helps prevent ride mix-ups and enhances passenger safety.
                    </p>
                    <GetStartedBtn />
                </div>
                <img src={Women} alt="Man in couch" className='w-120 rounded-4xl'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewFeatures
