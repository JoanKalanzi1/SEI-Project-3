import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import axios from 'axios'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
SwiperCore.use([Pagination])

const GroupCarousel = () => {
  const [groups, setGroups] = useState([])
  const [carouselGroups, setCarouselGroups] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getGroupData = async () => {
      try {
        const { data } = await axios.get('/api/groups')
        console.log('GROUPS', data)
        setGroups(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getGroupData()
  }, [])

  useEffect(() => {
    const getCarouselData = () => {
      console.log('carouselGroups', groups)
    }
    getCarouselData()
  }, [groups])


  return (
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
  )
}

export default GroupCarousel