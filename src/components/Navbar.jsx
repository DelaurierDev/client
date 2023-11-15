import React from 'react'
import Bag from '../assets/bag.png'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex w-full h-[80px] justify-between items-center px-[10px]'>
        <div>
            <img src={Logo} alt="PowerThreads logo" />
        </div>
        <div className='flex items-center justify-end sm:justify-between w-full max-w-[300px]'>
            <a href="" className='hidden sm:block text-xl hover:text-[#1d4aa8] '>Shop</a>
            <a href="" className='hidden sm:block text-xl hover:text-[#1d4aa8] '>Workout</a>
            <img src={Bag} alt="bag icon" style={{width: '40px'}}/>
        </div>
    </div>
  )
}

export default Navbar