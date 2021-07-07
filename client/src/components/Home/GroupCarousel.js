import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import axios from 'axios'
// import GroupCard from '../groups/GroupCard'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
SwiperCore.use([Pagination])

const GroupCarousel = () => {
  const [groups, setGroups] = useState([])
  const [carouselGroups, setCarouselGroups] = useState([])
  // eslint-disable-next-line
  const [hasError, setHasError] = useState(false)

  const carouselArray = []


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
      for (let i = 0; i < 8; i++) {
        const randomNum = Math.floor(Math.random() * groups.length)
        const singleGroup = groups[randomNum]
        carouselArray.push(singleGroup)
      }
      setCarouselGroups(carouselArray)
    }
    getCarouselData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups])


  console.log('Carousel groups', carouselGroups)
  console.log('Carousel 1', carouselGroups[0].name)

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
        {/* <SwiperSlide >
          {carouselGroups.map(group => {
            return <GroupCard key={group._id} {...group} />
          })}
        </SwiperSlide> */}
        <SwiperSlide>{`${carouselGroups[0].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[1].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[2].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[3].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[4].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[5].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[6].name}`}</SwiperSlide>
        <SwiperSlide>{`${carouselGroups[7].name}`}</SwiperSlide>
        ...
      </Swiper>

    </div>
  )
}

export default GroupCarousel