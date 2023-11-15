import React from 'react'
import Background from '../assets/workout.png'

const Home = () => {
  return (
    <div className='w-full lg:h-[700px] h-[500px]'>
        <div>
            <img src={Background} alt="Muscle man" className='w-full min-w-[700px] max-h-[700px] opacity-40 bg-[#EEEEF0] absolute' />
            
            <div className='w-full h-[700px] flex content-center items-center flex-col z-10 text-4xl opacity-100 py-[150px] md:py-[200px] lg:py-[300px]'>
              <p className='lg:text-[100px] md:text-[50px] lg:my-10'>Harness the <span className='text-[#1d4aa8]'>ENERGY</span></p>
              <p className='lg:text-[100px] lg:my-10'>Unleash the <span className='text-[#1d4aa8]'>POWER</span></p>        

            </div>

        </div>
    </div>
  )
}

export default Home