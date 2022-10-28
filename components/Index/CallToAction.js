import React from 'react'

function CallToAction() {
  return (
    <div className="w-full h-72 bg-[url('/assets/content.png')] bg-contain bg-no-repeat mt-20">
      <div className='py-8 pl-16'>
        <h1 className='font-Montserrat font-bold text-[40px] leading-[52px]'>Get started for free</h1>
        <p className='font-OpenSans font-normal text-xl leading-[40px]'>Turn your 3d ideas into incredible animations</p>
        <button className='font-Montserrat font-semibolo text-base leading-[14px] text-white bg-primary px-6 py-3 rounded-md mt-5'>Start 30 day trial</button>
      </div>
    </div>
  )
}

export default CallToAction