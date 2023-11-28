import React from 'react'

const Item = (props) => {
  return (
    <div className='border w-[300px] flex flex-col items-center p-5 my-5 shadow-lg hover:bg-gray-50'>
      <p className='text-xl'>{props.title}</p>
      <p>${props.price}</p>
      <p className='text-l'>{props.description}</p>
      <button className='text-[#1d4aa8] group border-2 border-[#1d4aa8] px-6 py-3 my-2 flex items-center hover:bg-[#1d4aa8] hover:border-black hover:text-white'>Add to card</button>
    </div>
  )
}

export default Item