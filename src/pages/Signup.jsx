import React from 'react'
import Navbar from '../components/Navbar'
import googleIcon from '../assets/icons/google-small.png';
function Signup() {
  return (
    <div className='w-full'>
        <Navbar />
        <div className='flex justify-center items-center w-full h-[93vh]'>
            <div className='text-center px-5 flex flex-col w-100'>
                <h1 className='text-3xl mb-7'>Sign Up</h1>
                <input type="text" placeholder='Email address' className='w-full bg-gray-100 py-4 px-5 rounded-xl mb-5'/>
                <button className='bg-black text-white py-4 px-5 rounded-xl'>Sign Up</button>
                <div className='flex justify-center items-center gap-x-4 mt-5'>
                    <div className='h-[1px] bg-gray-300 w-50'></div>
                    <div>
                        <p className='font-semibold'>OR</p>
                    </div>
                    <div className='h-[1px] bg-gray-300 w-50'></div>
                </div>
                    
                <div className='flex justify-center items-center gap-x-3 bg-gray-100 py-4 px-5 rounded-xl mt-5'>
                    <img src={googleIcon} alt="Google Icon" className='w-7'/>
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
