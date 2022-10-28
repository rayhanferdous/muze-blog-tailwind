import React from 'react'

function EditingCard({title, subtitle, img}) {
  return (
    <div className='px-10 pt-10 border border-solid rounded-xl'>
      <h3 className='font-Montserrat font-bold text-2xl leading-[36px] mb-1'>{title}</h3>
      <p className='font-OpenSans font-normal text-base leading-[32px]'>{subtitle}</p>
      <img className='mb-16 mt-11' src={`/assets/editing/${img}.svg`} alt="" />
      <div className='flex justify-end mb-8'>

      <img src="/assets/editing/button.svg" alt="" />
      </div>
    </div>
  )
}

export default EditingCard