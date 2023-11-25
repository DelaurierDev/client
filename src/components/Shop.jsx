import React from 'react'
import Item from '../components/Item'

const Shop = () => {
  return (
    <div name="shop" className='my-[200px] max-w-[1000px] px-7 mx-auto'>
        <p className='text-7xl border-b-2 w-[180px] align-middle'>Shop</p>
        <Item title = "Cool bag" price = "23.99" description = "super cool bag"/>
    </div>
  )
}

export default Shop