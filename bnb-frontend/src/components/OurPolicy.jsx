import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-20 m-auto mb-5' src={assets.quality_icon} alt="Quality Ingredients" />
        <p className='font-semibold'>Uncompromised Quality</p>
        <p className='text-gray-400'>Baked with love and passion, we never compromise on ingredient quality.</p>
      </div>
      
      <div>
        <img className='w-20 m-auto mb-5' src={assets.sourdough_icon} alt="Sourdough" />
        <p className='font-semibold'>Sourdough – A Gut-Friendly Choice</p>
        <p className='text-gray-400'>Our sourdough is packed with probiotics, offering a healthy alternative to supplements.</p>
      </div>
      
      <div>
        <img className='w-20 m-auto mb-5' src={assets.taste_icon} alt="Consistent Taste" />
        <p className='font-semibold'>Consistent Crave-Worthy Taste</p>
        <p className='text-gray-400'>We ensure that our customers enjoy the same delicious taste, time and time again.</p>
      </div>

      {/* <div>
        <img className='w-12 m-auto mb-5' src={assets.delivery_icon} alt="Reliable Delivery" />
        <p className='font-semibold'>Always There to Deliver</p>
        <p className='text-gray-400'>Count on us to deliver your favorite treats whenever you crave them.</p>
      </div> */}

    </div>
  )
}

export default OurPolicy;
