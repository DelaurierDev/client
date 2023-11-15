import React from 'react'
import Item from '../components/Item'

const Shop = () => {
  return (
    <div name="shop" className='my-[200px] max-w-[1000px] px-7 mx-auto'>
        <p className='text-7xl border-b-2 w-[180px] align-middle'>Shop</p>
        <Item/>
    </div>
  )
}

export default Shop