import React from 'react'

function PlaceList({children}) {
  return (
    <div className='flex-col flex gap-2'>
    <div className='bg-white text-[#D32F2F] text-xl font-bold'>{children}</div>
    </div>
  )
}

export default PlaceList