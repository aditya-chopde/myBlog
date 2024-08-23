import React from 'react'
import { images } from '../assets/svgs'

const Posts = () => {
  return (
    <>
      <div className='my-8'>
        <h1 className='text-3xl font-bold my-5'>Posts</h1>
        <div>
            {/* Posts */}
            <div className='w-[750px] border border-gray-600 p-5 rounded-lg flex flex-row gap-5 my-3 cursor-pointer'>
                <div>
                    <img src={images.image_1} alt="image_1" className='w-56 rounded-sm'/>
                </div>
                <div>
                    <h2 className='font-bold hover:text-purple-500'>How to centre a div using HTML, CSS and JS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, provident omnis beatae recusandae, aspernatur dolor nesciunt non mollitia et illo.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Posts
