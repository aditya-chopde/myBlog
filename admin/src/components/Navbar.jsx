import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='justify-around flex flex-row m-5'>
        <div>
            <h1 className='cursor-pointer text-4xl font-bold text-purple-600'>myBlogs</h1>
        </div>
        <ul className='flex gap-5 text-md'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Privacy Policy</li>
            <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
