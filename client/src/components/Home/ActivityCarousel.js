import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
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

const ActivityCarousel = () => {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        console.log(data)
        setActivities(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log('ACTIVITIES', activities)


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
        <SwiperSlide>Activity 1</SwiperSlide>
        <SwiperSlide>Activity 2</SwiperSlide>
        <SwiperSlide>Activity 3</SwiperSlide>
        <SwiperSlide>Activity 4</SwiperSlide>
        <SwiperSlide>Activity 5</SwiperSlide>
        <SwiperSlide>Activity 6</SwiperSlide>
        <SwiperSlide>Activity 7</SwiperSlide>
        <SwiperSlide>Activity 8</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ActivityCarousel