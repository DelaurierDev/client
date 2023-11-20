import React from 'react'
import Bench from '../assets/bench.jpg'
import Curl from '../assets/curl.jpg'
import Raise from '../assets/raise.jpg'
import Situp from '../assets/sit up.jpg'
import Deadlift from '../assets/deadlift.jpg'

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
            <div>
                <p className='text-3xl border-b-2'>Arms</p>
                <div className='my-[10px] flex flex-col items-center'>
                    <img src={Curl} alt="Bench press" className='w-[600px] mx-auto'/>
                    <ul className='my-[10px] center'>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>1) </span>4 sets of 10 reps of <a href="https://www.youtube.com/watch?v=av7-8igSXTs" target="_" className='text-[#1d4aa8]'>Standing Dumbbell Curl</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>2) </span>4 sets of 12 reps of <a href="https://www.youtube.com/watch?v=0AUGkch3tzc" target="_"className='text-[#1d4aa8]'>Dumbbell Concentration Curl</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>3) </span>4 sets of 10 reps of <a href="https://www.youtube.com/watch?v=XZ4uBdekQqA" target='_' className='text-[#1d4aa8]'>Straight Bar Curls</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>4) </span>4 sets of 10 reps of <a href="https://www.youtube.com/watch?v=6MwtkyNC2ZY" target='_' className='text-[#1d4aa8]'>Tricep Dips</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>5) </span>5 sets of 15 reps of <a href="https://www.youtube.com/watch?v=8WL0m0vLAPo" target='_' className='text-[#1d4aa8]'>Tricep Cable Pushdown</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>6) </span>5 sets of 15 reps of <a href="https://www.youtube.com/watch?v=ns-RGsbzqok" target='_' className='text-[#1d4aa8]'>Tricep Extension</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-3xl border-b-2'>Shoulders</p>
                <div className='my-[10px] flex flex-col items-center'>
                    <img src={Raise} alt="Bench press" className='w-[600px] mx-auto'/>
                    <ul className='my-[10px] center'>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>1) </span>3 sets of 8-10 reps of <a href="https://www.youtube.com/watch?v=qEwKCR5JCog" target="_" className='text-[#1d4aa8]'>Shoulder Press</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>2) </span>3 sets of 10-12 reps of <a href="https://www.youtube.com/watch?v=kDqklk1ZESo" target="_"className='text-[#1d4aa8]'>Lateral Raises</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>3) </span>3 sets of 10-12 reps of <a href="https://www.youtube.com/watch?v=vJ8x0Oz06gw" target='_' className='text-[#1d4aa8]'>Upright Row</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>4) </span>3 sets of 12-15 reps of <a href="https://www.youtube.com/watch?v=qz1OLup4W_M" target='_' className='text-[#1d4aa8]'>Rear Delt Cable Raise</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>5) </span>3 sets of 10-12 reps of <a href="https://www.youtube.com/watch?v=hRJ6tR5-if0" target='_' className='text-[#1d4aa8]'>Front Raise</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>6) </span>3 sets of 12-15 reps of <a href="https://www.youtube.com/watch?v=cJRVVxmytaM" target='_' className='text-[#1d4aa8]'>Dumbbell Shrug</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-3xl border-b-2'>Back</p>
                <div className='my-[10px] flex flex-col items-center'>
                    <img src={Deadlift} alt="Bench press" className='w-[600px] mx-auto'/>
                    <ul className='my-[10px] center'>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>1) </span>3 sets of 12 reps of <a href="https://www.youtube.com/watch?v=lueEJGjTuPQ" target="_" className='text-[#1d4aa8]'>Wide Grip Lat Pulldown</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>2) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=IjoFCmLX7z0" target="_"className='text-[#1d4aa8]'>Close Grip Lat Pulldown</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>3) </span>3 sets of 12 reps of <a href="https://www.youtube.com/watch?v=9xGqgGFAtiM" target='_' className='text-[#1d4aa8]'>Barbell Shrugs</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>4) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=CN_7cz3P-1U" target='_' className='text-[#1d4aa8]'>Stiff Legged Barbell Deadlifts</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>5) </span>3 sets of 8 reps of <a href="https://www.youtube.com/watch?v=ph3pddpKzzw" target='_' className='text-[#1d4aa8]'>Back Extensions</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>6) </span>3 sets of 12 reps of <a href="https://www.youtube.com/watch?v=9xGqgGFAtiM" target='_' className='text-[#1d4aa8]'>Barbell Shrugs</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-3xl border-b-2'>Core</p>
                <div className='my-[10px] flex flex-col items-center'>
                    <img src={Situp} alt="Bench press" className='w-[600px] mx-auto'/>
                    <ul className='my-[10px] center'>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>1) </span>3 sets of 20 reps of <a href="https://www.youtube.com/watch?v=XyuWESsqXzg" target="_" className='text-[#1d4aa8]'>Plank Crunches</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>2) </span>3 sets of 20 reps of <a href="https://www.youtube.com/watch?v=3WAcs5qsSKQ" target="_"className='text-[#1d4aa8]'>Body Saw</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>3) </span>3 sets of 20 reps of <a href="https://www.youtube.com/watch?v=9C9sbJfFjJM" target='_' className='text-[#1d4aa8]'>Side Bridges</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>4) </span>3 sets of 20 reps of <a href="https://www.youtube.com/watch?v=jDwoBqPH0jk" target='_' className='text-[#1d4aa8]'>Sit Ups</a></li>
                        <li className='text-xl my-7'><span className='text-[#1d4aa8] text-xl'>5) </span>3 sets of 20 reps of <a href="https://www.youtube.com/watch?v=5ER5Of4MOPI" target='_' className='text-[#1d4aa8]'>Crunches</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>

  )
}

export default Workout