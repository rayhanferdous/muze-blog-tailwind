import React from 'react';
import EditingCard from '../Utils/EditingCard';

function Editing() {
  return (
    <div className='flex gap-x-4 my-28'>
      <EditingCard title={'Editing'} subtitle={'Never worry'} img={'squere'} />
      <EditingCard title={'Timeline'} subtitle={'Pixel perfect animation'} img={'line'} />
      <EditingCard title={'Smart Curves'} subtitle={'Smooth actions at ease'} img={'path'} />
    </div>
  )
}

export default Editing