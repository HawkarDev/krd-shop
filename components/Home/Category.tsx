import { getAllCategories } from '@/request/request'
import React from 'react'

const Category = async() => {

    const categories:string[] = await getAllCategories()
    console.log(categories)
  return (
    <div>
      <h1 className=' text-center font-bold capitalize text-2xl'>Shop by category</h1>
      <div className='mt-12 w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {categories.map((category)=> <div key={category} className='mt-2 mb-2 p-2 rounded-lg cursor-pointer text-center bg-gray-200 hover:scale-110 duration-300 shadow-md' >
            
            <h1 className='text-sm sm:text-base md:text-lg capitalize font-bold'> {category}</h1>
           
            
            </div> )}
      </div>
    </div>
  )
}

export default Category
