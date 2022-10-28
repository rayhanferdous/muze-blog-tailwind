import React from 'react'

function PricingCard({premium = false}) {
  return (
    <div className='p-10 w-full border border-solid rounded-md'>
      <div>
        <h3 className='font-Montserrat font-bold text-2xl leading-[36px]'>Free</h3>
        <h1 className='font-Montserrat font-bold text-[56px] leading-[76px]'>{premium ? '$24':'$0'}</h1>
        <p className='font-OpenSans font-normal text-base leading-[32px]'>{premium ? 'For businesses':'For personal projects'}</p>
      </div>
      <hr className='my-5' />
      <div>
        <div className='flex items-center gap-x-3'>
          <img src="/assets/pricing/tick.svg" alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>Umlimited Projects</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <img src="/assets/pricing/tick.svg" alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>Sketch, Figma, Adobe XD Plugin</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <img src="/assets/pricing/tick.svg" alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>3k+ Components Library</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <img src="/assets/pricing/tick.svg" alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>Free Design Assets</p>
        </div>
        <div className='flex items-center gap-x-3'>
          <img src={premium? '/assets/pricing/tick.svg':'/assets/pricing/cross.svg'} alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>24 / 7 Support </p>
        </div>
        <div className='flex items-center gap-x-3'>
          <img src={premium? '/assets/pricing/tick.svg':'/assets/pricing/cross.svg'} alt="" />
          <p className='font-OpenSans font-normal text-base leading-[32px]'>Free Updates</p>
        </div>
      </div>
      <button className='bg-primary w-full h-10 rounded mt-9 text-white'>Subscribe</button>
    </div>
  )
}

export default PricingCard