import React from 'react'
import { svg } from '../assets/svgs'

const Labels = () => {
  return (
    <>
      <div>
            <div className="bg-purple-600 text-white py-2 text-xl px-5 w-56 text-left">
              Labels
            </div>
            <ul className="m-5">
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>All</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>Technology</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>Space</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>Coding</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>DSA</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>Blockchain</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>MERN</p>
              </li>
              <li className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>AI</p>
              </li>
              
            </ul>
          </div>
    </>
  )
}

export default Labels
