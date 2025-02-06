import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-center w-full h-[calc(100vh-12vh)] flex-col'>
    {/* define grid */}
  <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
  {/* content */}
  <div>
  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>
    mega sale <span className='text-rose-600'>special</span> offer up to<span className='text-orange-600'> 70% </span>off</h1>
   <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4 '>
   The more you buy, the more you save – exclusive offers for bulk shoppers.
Perfect for stocking up or sharing with friends and family.
Hurry, these discounts won’t last long!
  </p>
  <div className='flex mt-6 space-x-4 items-center'>
    <Button  size={'lg'} className=' hover:bg-yellow-700 bg-orange-600'>See More</Button>
    <Button size={'lg'} className=' hover:bg-yellow-700 bg-orange-600' >Explore</Button>
  </div>
  
  
  </div>
  <div className='hidden lg:block'>
     <Image src='/images/3.jpg' alt='hero' width={600} height={600} className='lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]'/>
  </div>
  </div>
  
</div>
  )
}

export default Hero
