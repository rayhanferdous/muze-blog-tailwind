import React from 'react'

function Footer() {
  return (
    <div className='bg-[#F8F9FA]'>
    <div className='flex justify-between pt-20 pb-4'>
      <div className=''>
        <h5 className='font-Montserrat font-bold text-base leading-[24px]'>Product</h5>
        <ul>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Get started</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Updates</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Features</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Pricing</a></li>
        </ul>
      </div>
      <div className=''>
        <h5 className='font-Montserrat font-bold text-base leading-[24px]'>Platforms</h5>
        <ul>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Android</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">iOS</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Web</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Unity</a></li>
        </ul>
      </div>
      <div className=''>
        <h5 className='font-Montserrat font-bold text-base leading-[24px]'>Resources</h5>
        <ul>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Tutorials</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Plagins</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Events</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Intregrations</a></li>
        </ul>
      </div>
      <div className=''>
        <h5 className='font-Montserrat font-bold text-base leading-[24px]'>About</h5>
        <ul>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Community</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Company</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Jobs</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Blog</a></li>
        </ul>
      </div>
      <div className=''>
        <h5 className='font-Montserrat font-bold text-base leading-[24px]'>Support</h5>
        <ul>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Help Center</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Tickets</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Contact</a></li>
          <li><a className='font-OpenSans font-normal text-base leading-[32px]' href="">Forum</a></li>
        </ul>
      </div>      
    </div>
      <hr className='mt-5 mb-6 block' />
    <div className='flex justify-between my-5'>
        <p className='font-OpenSans font-normal text-[13px] leading-[24px]'>© 2020 Fabrx Design. All rights reserved.</p>
        <div className='flex gap-x-3 h-4'>
          <img src="/assets/social/fb.svg" alt="" />
          <img src="/assets/social/dribble.svg" alt="" />
          <img src="/assets/social/instra.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer