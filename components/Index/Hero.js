import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-x-5 justify-between my-28'>
      <div className='w-10/12'>
        <h1 className='font-Montserrat font-bold text-[54px] leading-[76px]'>Harnessing the power of müze</h1>
        <p className='font-OpenSans font-normal text-xl leading-[40px]'>Design, build, collaborate, and bring your ideas to life with the world’s most popular and intuitive 3d design platform.</p>
        <div className='flex items-center gap-x-4 mt-6'>
          <button className='bg-primary text-white px-4 py-3
          rounded-md font-Montserrat font-semibold text-base leading-[14px]'>Free Trial</button>
          <a className='font-Montserrat font-semibold text-base leading-[14px] flex items-center gap-x-2 text-primary' href="/#">Learn More <img src="/assets/right-arrow.svg" alt="" /></a>
        </div>
      </div>
      <div>
        <img src="/assets/image.png" alt="" />
      </div>
    </div>
  )
}

export default Hero