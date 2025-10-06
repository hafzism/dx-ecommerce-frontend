import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
  return (


    // <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    //     <div className='overflow-hidden'>
    //         <img className='hover:scale-110 transition ease-in-out' src={`http://localhost:3000${image}`}alt="" />
    //     </div>
    //     <p className='pt-3 pb-1 text-sm'>{name}</p>
    //     <p className='text-sm font-medium'>rs.{price}</p>
    // </Link>

    <>


<Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
  <div className="overflow-hidden rounded-lg w-full h-64 bg-gray-100 flex items-center justify-center">
    <img
      className="w-full h-full object-cover hover:scale-110 transition-transform ease-in-out duration-300"
      src={`http://localhost:3000${image}`}
      alt={name}
    />
  </div>
  <p className="pt-3 pb-1 text-sm truncate">{name}</p>
  <p className="text-sm font-medium">₹{price}</p>
</Link>
</>
  )
}

export default ProductItem