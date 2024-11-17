import React from 'react'
import { svg } from '../assets/svgs'

const Labels = () => {
  const getData = JSON.parse(localStorage.getItem("labels"));
  return (
    <>
      <div>
            <div className="bg-purple-600 text-white py-2 text-xl px-5 w-56 text-left">
              Labels
            </div>
              <ul className="m-5">
            {getData.map((item)=>(
              <li key={item._id} className="cursor-pointer hover:text-purple-600 flex">
                <img src={svg.right} alt="right" className='w-5'/>
                <p>{item.labelName}</p>
              </li>
            ))}
            </ul>
          </div>
    </>
  )
}

export default Labels
