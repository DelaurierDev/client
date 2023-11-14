import React from 'react'
import Bag from '../assets/bag.png'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex w-full h-[80px] justify-between items-center px-[10px]'>
        <div>
            <img src={Logo} alt="PowerThreads logo" />
        </div>
        <div className='flex items-center justify-between w-full max-w-[120px]'>
            <a href="" className='text-xl hover:text-[#1d4aa8] sm:'>Shop</a>
            <img src={Bag} alt="bag icon" style={{width: '40px'}}/>
        </div>
    </div>
  )
}

export default Navbar