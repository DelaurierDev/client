import React from 'react'

const Item = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>${props.price}</p>
      <p>{props.description}</p>
      <button className='text-[#1d4aa8] group border-2 border-[#1d4aa8] px-6 py-3 my-2 flex items-center hover:bg-[#1d4aa8] hover:border-black hover:text-white'>Add to card</button>
    </div>
  )
}

export default Item