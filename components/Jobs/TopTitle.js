import React from 'react'

function TopTitle() {
  return (
    <div className='flex justify-between pt-20 pb-8'>
      <div className=''>
        <h1 className='font-Montserrat font-bold text-[40px] leading-[52px]'>Lead Product Designer</h1>
        <p className='font-OpenSans font-normal text-xl leading-[40px]'>San Franciso, CA - Full Time</p>
      </div>
      <div className='self-end flex gap-x-3 justify-end'>
        <button className='px-6 py-2 rounded text-black bg-green-200'>Share</button>
        <button className='px-6 py-2 rounded text-white bg-primary'>Apply</button>
      </div>      
    </div>
  )
}

export default TopTitle