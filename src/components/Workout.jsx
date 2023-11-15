import React from 'react'
import Bench from '../assets/bench.jpg'

const Workout = () => {
  return (
    <div name="workout" className='my-[200px] max-w-[1000px] px-7 mx-auto'>
        <div>
            <p className='text-7xl border-b-2 w-[300px] align-middle'>Workout</p>
            <p className='text-xl'>Enjoy some complementary workouts on us!</p>
            <p>// Click on the workouts for a tutorial on how to do them!</p>
        </div>
        <div className='my-[70px]'>
            <div>
                <p className='text-3xl border-b-2'>Chest</p>
                <div className='my-[10px] flex flex-col items-center'>
                    <img src={Bench} alt="Bench press" className='w-[600px] mx-auto'/>
                    <ul className='my-[10px] center'>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>1) </span>3 sets of 4-6 reps of <a href="https://www.youtube.com/watch?v=jPLdzuHckI8" target="_" className='text-[#1d4aa8]'>Barbell Incline Bench Press</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>2) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=IP4oeKh1Sd4" target="_"className='text-[#1d4aa8]'>Incline Dumbbell Press</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>3) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=ajdFwa-qM98" target='_' className='text-[#1d4aa8]'>Incline Dumbbell Flyes</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>4) </span>3 sets of 4-6 reps of <a href="https://www.youtube.com/watch?v=4Y2ZdHCOXok" target='_' className='text-[#1d4aa8]'>Barbell Bench Press</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>5) </span>3 sets of 4-6 reps of <a href="https://www.youtube.com/watch?v=OR6WM5Z2Hqs" target='_' className='text-[#1d4aa8]'>Decline Barbell Bench Press</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>6) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=dX_nSOOJIsE" target='_' className='text-[#1d4aa8]'>Chest Dips</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>

  )
}

export default Workout