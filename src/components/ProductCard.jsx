import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id,name,image,price}) => {
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image} alt="" className='hover:scale-110 transition ease-in-out'/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='font-medium text-sm'>rs.{price}</p>
    </Link>
  )
}

export default ProductCard