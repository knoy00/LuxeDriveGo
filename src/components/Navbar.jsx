import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({login, signup, help}) => {
    const navigate = useNavigate();
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
                    <li className='cursor-pointer'>{help}</li>
                    <li className='cursor-pointer'>{login}</li>
                    <li className='cursor-pointer' onClick={() => navigate('/Signup')}>{signup}</li>
                    {/* <li></li> */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
