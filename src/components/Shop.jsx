import React from 'react'
import Item from '../components/Item'

const Shop = () => {
  return (
    
    <div name="shop" className='my-[200px] max-w-[1000px] px-7 mx-auto'>

        <p className='text-7xl border-b-2 w-[180px] align-middle'>Shop</p>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>
            <Item title = "Cool bag" price = "23.99" description = ""/>
            <Item title = "Cool shoes" price = "28.99" description = ""/>
            <Item title = "Cool bag" price = "23.99" description = ""/>
            <Item title = "Cool shoes" price = "28.99" description = ""/>
            <Item title = "Cool bag" price = "23.99" description = ""/>
            <Item title = "Cool shoes" price = "28.99" description = ""/>
        </div>

  

    </div>
  )
}

export default Shop