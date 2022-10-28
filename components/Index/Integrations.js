import React from 'react'

function Integrations() {
  return (
    <div className='flex items-center gap-x-5 justify-between my-28'>
      <div className='w-10/12'>
        <p className='font-Montserrat font-bold text-base leading-[24px]'>Integrations</p>
        <h1 className='font-Montserrat font-bold text-[40px] leading-[52px]'>Latest and most powerful platforms</h1>
        <p className='font-OpenSans font-normal text-base leading-[32px]'>Add live animations and 3d elements to your design with our incredibly powerful plugin. Collaborate and share ideas with your team members and export assets for developers Instantly. </p>
        <div className='flex items-center gap-x-4 mt-6'>
          <a className='font-Montserrat font-semibold text-base leading-[14px] flex items-center gap-x-2 text-primary' href="/#">See Integrations <img src="/assets/right-arrow.svg" alt="" /></a>
        </div>
      </div>
      <div>
        <img src="/assets/integrations.png" alt="" />
      </div>
    </div>
  )
}

export default Integrations