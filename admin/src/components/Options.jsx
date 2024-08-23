import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <>
      <div className='p-5 my-8'>
        <div className='my-3'>
          <Link to="/create">
            <button className='px-5 py-3 rounded-lg text-white bg-purple-600 hover:scale-105 transition-all'>Create New Post</button>
            </Link>
        </div>
        <div className='mx-5'>
            <ul>
              <Link to="/">
                <li className='my-2 cursor-pointer'>Home</li>
              </Link>
              <Link to="/email">
                <li className='my-2 cursor-pointer'>Emails</li>
              </Link>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Options
