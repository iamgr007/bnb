import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.bnb_logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Dedicated to delivering wholesome, probiotic-rich sourdough and baked goods that never compromise on taste or quality. Our philosophy is simple—bake with passion, use natural ingredients, and create an experience worth craving.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Beige & Brown</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-7416648168</li>
            <li>contact@bnb.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ iamgr007.github.io - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
