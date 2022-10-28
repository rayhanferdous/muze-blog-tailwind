import React from 'react'
import PricingCard from '../Utils/PricingCard'

function Pricing() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center my-6'>
        <div className='my-6'>
        <h3 className='text-center font-Montserrat font-bold text-[56px] leadign-[76px]'>Simple pricing for any designers and agencies </h3>
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='font-OpenSans font-normal text-base leading-[32px]'>Monthly</div>
          <div className='relative'>
            <div className='w-12 h-6 rounded-2xl bg-gray-300'>
            <div className='h-5 w-5 rounded-full bg-white absolute left-[2px] top-[2px]'></div>
            </div>
          </div>
          <div className='font-OpenSans font-normal text-base leading-[32px]'>Yearly</div>
        </div>
      </div>
      <div className='flex justify-between gap-x-4'>
      <PricingCard/>
      <PricingCard premium={true}/>
      </div>
      <div className='flex justify-center items-center mb-6'>

      <p className='font-OpenSans font-normal text-base leading-[32px] w-9/12 text-center'>This order process is provided by Paddle.com, who handle all payment services, invoicing and download links. Need more information? You can always reach us at support@name.com</p>
      </div>
    </div>
  )
}

export default Pricing