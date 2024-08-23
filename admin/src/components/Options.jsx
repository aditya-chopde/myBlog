import React from 'react'

const Options = () => {
  return (
    <>
      <div className='p-5 my-8'>
        <div className='my-3'>
            <button className='px-5 py-3 rounded-lg text-white bg-purple-600 hover:scale-105 transition-all'>Create New Post</button>
        </div>
        <div className='mx-5'>
            <ul>
                <li className='my-2 cursor-pointer'>Home</li>
                <li className='my-2 cursor-pointer'>Email List</li>
                <li className='my-2 cursor-pointer'>Comments</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Options
