import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between h-20'>
      <div><img src="/assets/logo.png" alt="" /></div>
        <div className='flex gap-x-12 justify-evenly'>
          
            <a className='flex items-center justify-center gap-x-2 font-Montserrat font-semibold text-sm leading-4' href="/#">Landing <img src="/assets/dropdown.svg" alt="" /></a>
            <a className='flex items-center justify-center gap-x-2 font-Montserrat font-semibold text-sm leading-4' href="/#">Pages <img src="/assets/dropdown.svg" alt="" /></a>
            <a className='flex items-center justify-center gap-x-2 font-Montserrat font-semibold text-sm leading-4' href="/#">Blog <img src="/assets/dropdown.svg" alt="" /></a>
            <a className='flex items-center justify-center gap-x-2 font-Montserrat font-semibold text-sm leading-4' href="/#">Docs <img src="/assets/dropdown.svg" alt="" /></a>
         
          
        </div>
      <button className='bg-primary text-white py-2 px-5 rounded-md'>Buy Now</button>
    </div>
  )
}

export default Header