import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-black w-full'>
      <div className='max-w-[1400px] mx-auto px-3 py-4'>
        <div className='flex justify-between items-center'>
            <div className='text-white text-2xl cursor-pointer'>
                <Link to='/'>
                    <h1>LuxeDriveGo</h1>
                </Link>
            </div>
            <div >
                <ul className='flex justify-center items-center space-x-10 text-white font-semibold'>
                    <li className='cursor-pointer'>Help</li>
                    <li className='cursor-pointer'>Log in</li>
                    <li className='cursor-pointer'>Sign up</li>
                    {/* <li></li> */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
