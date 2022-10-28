import React from 'react'
import Responsibility from '../components/Jobs/Responsibility'
import TopTitle from '../components/Jobs/TopTitle'
import Working from '../components/Jobs/Working'
import Master from '../components/Layout/Master'

function Jobs() {
  return (
    <Master>
      <TopTitle/>
      <Working/>
      <Responsibility/>
    </Master>
  )
}

export default Jobs