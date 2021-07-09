/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import axios from 'axios'
import ActivityCarouselCard from '../activities/ActivityCarouselCard'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
SwiperCore.use([Pagination])

const ActivityCarousel = () => {
  const [activities, setActivities] = useState(null)
  const [carouselActivities, setCarouselActivities] = useState(null) // starting state as null as empty array is truthy
  // eslint-disable-next-line
  const [hasError, setHasError] = useState(false)
  const carouselArray = []
  const randomString = () => Math.random() * 1000

  useEffect(() => {
    const getActivityData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        console.log('DATA', data)
        setActivities(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getActivityData()
  }, [])
  console.log('ACTIVITIES', activities)

  useEffect(() => {
    const getCarouselData = () => {
      for (let i = 0; i < 8; i++) {
        const randomNum = Math.floor(Math.random() * activities.length)
        const singleActivity = activities[randomNum]
        carouselArray.push(singleActivity)
      }
      setCarouselActivities(carouselArray)
    }
    if (activities) getCarouselData() // calling function behind a condition as the loop can only run when groups are on state, this useEffect will run on page load and groups will have no value initially
  }, [activities])
  if (!carouselActivities) return null // if there is nothing on state first render return null instead


  return (
    
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
        {carouselActivities.map(activity => {
          return (
            <SwiperSlide key={randomString()}>
              <ActivityCarouselCard {...activity}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ActivityCarousel