import React from 'react'
import head from '../assets/head.png'
import head1 from '../assets/exchange.png'
import head2 from '../assets/return.png'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

        <div>
            <img src={head} className="w-12 m-auto mb-5" />
            <p className=" font-semibold">Easy Exchange Policy</p>
            <p className=" text-gray-400">We offer hassle free exchange policy</p>
        </div>
                <div>
            <img src={head1} className="w-12 m-auto mb-5" />
            <p className=" font-semibold">7 Days Return Policy</p>
            <p className=" text-gray-400">We provide 7 days free return policy</p>
        </div>
                <div>
            <img src={head2} className="w-12 m-auto mb-5" />
            <p className=" font-semibold">Best customer support</p>
            <p className=" text-gray-400">we provide 24/7 customer support</p>
        </div>


    </div>
  )
}

export default OurPolicy