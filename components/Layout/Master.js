import React, { Children } from 'react'
import Footer from './Partials/Footer'
import Header from './Partials/Header'

function Master({children}) {
  return (
    <div className=''>
      <div className='grid grid-cols-[200px,1fr,200px]'>
        <div className='w-full'></div>
            <Header/>
        <div className='w-full'></div>
      </div>
      <div className='grid grid-cols-[200px,1fr,200px]'>
        <div className='w-full'></div>
          <div className='w-full'>
              {children}
          </div>
        <div className='w-full'></div>
      </div>
      <div className='grid grid-cols-[200px,1fr,200px]'>
        <div className='w-full bg-[#F8F9FA]'></div>
            <Footer/>
        <div className='w-full bg-[#F8F9FA]'></div>
      </div>
    </div>
  )
}

export default Master