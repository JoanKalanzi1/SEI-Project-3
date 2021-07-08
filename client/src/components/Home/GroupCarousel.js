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
import GroupCarouselCard from '../groups/GroupCarouselCard.js'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
SwiperCore.use([Pagination])

const GroupCarousel = () => {
  const [groups, setGroups] = useState(null)
  const [carouselGroups, setCarouselGroups] = useState(null) // starting state as null as empty array is truthy
  // eslint-disable-next-line
  const [hasError, setHasError] = useState(false)
  const carouselArray = []
  const randomString = () => Math.random() * 1000

  useEffect(() => {
    const getGroupData = async () => {
      try {
        const { data } = await axios.get('/api/groups')
        console.log('DATA', data)
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
    if (groups) getCarouselData() // calling function behind a condition as the loop can only run when groups are on state, this useEffect will run on page load and groups will have no value initially
  }, [groups])
  if (!carouselGroups) return null // if there is nothing on state first render return null instead
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
        {carouselGroups.map(group => {
          return (
            <SwiperSlide key={randomString()}>
              <GroupCarouselCard {...group}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default GroupCarousel