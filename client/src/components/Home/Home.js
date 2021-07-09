import React from 'react'
import ActivityCarousel from './ActivityCarousel'
import GroupCarousel from './GroupCarousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroVideo from './HeroVideo'



const Home = () => {
  return (
    <>
      <HeroVideo />
      <div className="activity-carousel-title">
        <h2> Activities</h2>
      </div>
      <ActivityCarousel />
      <div className="act-car">
        <h2>Activity</h2>
      </div>
      <GroupCarousel />
    </>
  )
}

export default Home