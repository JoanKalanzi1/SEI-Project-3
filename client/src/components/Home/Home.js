import React from 'react'
import ActivityCarousel from './ActivityCarousel'
import GroupCarousel from './GroupCarousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroVideo from './HeroVideo'




const Home = () => {
  return (
    <>
      <HeroVideo />
      <ActivityCarousel />
      <div className="act-car">
        <h2>Browse our activities and groups </h2>
      </div>
      <GroupCarousel />
    </>
  )
}

export default Home