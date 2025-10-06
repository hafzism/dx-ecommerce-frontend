import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ _id, name, description }) => {
  return (
<Link 
  to={`/shop/${_id}`} 
  className='border border-gray-200 rounded-md p-5 text-gray-700 hover:shadow-md hover:border-gray-300 transition cursor-pointer h-36 flex flex-col justify-between'
>
      <h3 className='text-base font-semibold mb-2'>{name}</h3>
      <p className='text-sm text-gray-500'>{description}</p>
    </Link>
  )
}

export default CategoryCard
