import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.bnb_square} alt="Beige & Brown logo" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Beige & Brown was born from a love for authentic baking, a commitment to quality, and a belief in natural ingredients. Our goal is to redefine bakery standards by crafting artisanal breads and pastries without artificial colors or preservatives, using pure, natural flavors of vanilla, chocolate, and naturally leavened breads.</p>
          <p>We specialize in traditional boulangerie and patisserie favorites such as sourdough, bagels, and baguettes. Every loaf is created through natural fermentation, avoiding commercial yeast to bring you the depth of flavor and health benefits only naturally processed breads can offer.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Beige & Brown is to bring back the essence of traditional baking, where each item is crafted with love and dedication. We are here to create an indulgent yet wholesome experience that people can trust for quality and consistency.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Pure Ingredients:</b>
          <p className='text-gray-600'>We use only natural, high-quality ingredients, ensuring each product is free from artificial colors and additives.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Artisan Craftsmanship:</b>
          <p className='text-gray-600'>Our bakery follows traditional methods, including natural fermentation, to bring out the authentic flavors in every loaf and pastry.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Commitment:</b>
          <p className='text-gray-600'>Our dedication to consistency means you can count on the same delicious flavor and quality in every purchase.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
