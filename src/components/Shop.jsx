import React from 'react'
import Item from '../components/Item'
import Nike from '../assets/nike.png'
import PullUp from '../assets/pullup.png'
import Bands from '../assets/bands.jpg'
import Bag from '../assets/gymshark.jpg'
import Mill from '../assets/treadmill.jpg'
import Susp from '../assets/suspension.jpg'

const Shop = () => {
  return (
    
    <div name="shop" className='my-[200px] max-w-[1000px] px-7 mx-auto'>

        <p className='text-7xl border-b-2 w-[180px] align-middle'>Shop</p>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>
            <Item img = {PullUp} title = "Pull up bar" price = "199.99" description = ""/>
            <Item img = {Bands} title = "Resistence Bands" price = "59.99" description = ""/>
            <Item img = {Bag} title = "Gymshark Gym Bag" price = "28.80" description = ""/>
            <Item img = {Nike} title = "Nike Running Shoes" price = "64.97" description = ""/>
            <Item img = {Mill} title = "Multi-Purpose Treadmill" price = "349.99" description = ""/>
            <Item img = {Susp} title = "All-in-One Suspension Training System" price = "96.99" description = ""/>
        </div>

  

    </div>
  )
}

export default Shop