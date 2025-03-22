import React from 'react'


function Card({ icon: Icon, title, description, bgColor }) {
  return (
    <div className='flex flex-col items-center justify-center w-[300px]'>
        <div className={`p-2 rounded-md`} style={{ backgroundColor: bgColor }}><Icon size={25} color="white" /></div>
        <h3>{title}</h3>
        <p className='font-light text-center'>{description}</p>
    </div>
  )
}

export default Card