import React from 'react'


const Item = (props) => {
  return (
    <div className='border w-full flex flex-col items-center p-5 m shadow-lg hover:bg-gray-50 justify-between'>
      

        <img src={props.img} alt="" className=' w-full'/>

      <div className='flex flex-col items-center'>
        <p className='text-xl'>{props.title}</p>
        <p>${props.price}</p>
        <button className='text-[#1d4aa8] group border-2 border-[#1d4aa8] px-6 py-3 my-2 flex items-center hover:bg-[#1d4aa8] hover:border-black hover:text-white'>Add to card</button>
      </div>
      
    </div>
  )
}

export default Item