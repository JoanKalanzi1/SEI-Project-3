import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
SwiperCore.use([Pagination])

const GroupCarousel = () => {

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