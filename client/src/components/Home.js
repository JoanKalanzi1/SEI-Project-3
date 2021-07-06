// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
// install Swiper modules
SwiperCore.use([Pagination])



const Home = () => {
  const [singleActivity, setSingleActivity] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        console.log(data)
        setSingleActivity(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(singleActivity)






  return (
    <>
      <Jumbotron>
        <video className='videoTag' autoPlay loop muted>
          <source src='https://imgur.com/PXNKqMo' type='video/mp4' />
        </video>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary center">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="activity-carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Activity 1</SwiperSlide>
          <SwiperSlide>Activity 2</SwiperSlide>
          <SwiperSlide>Activity 3</SwiperSlide>
          <SwiperSlide>Activity 4</SwiperSlide>
          <SwiperSlide>Activity 5</SwiperSlide>
          <SwiperSlide>Activity 6</SwiperSlide>
          <SwiperSlide>Activity 7</SwiperSlide>
          <SwiperSlide>Activity 8</SwiperSlide>
          ...
        </Swiper>
      </div>

      <div className="Map">
        <h2> Map </h2>
      </div>
      <div className="group-carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Group 1</SwiperSlide>
          <SwiperSlide>Group 2</SwiperSlide>
          <SwiperSlide>Group 3</SwiperSlide>
          <SwiperSlide>Group 4</SwiperSlide>
          <SwiperSlide>Group 5</SwiperSlide>
          <SwiperSlide>Group 6</SwiperSlide>
          <SwiperSlide>Group 7</SwiperSlide>
          <SwiperSlide>Group 8</SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="Footer">
        <h2> Footer </h2>
      </div>
    </>
  )
}

export default Home