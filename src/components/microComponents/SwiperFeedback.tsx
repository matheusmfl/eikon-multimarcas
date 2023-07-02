'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/swiper.css'
import { FeedbackBalloon } from './FeedbackBalloon'

SwiperCore.use([Pagination])

export function SwiperFeedback() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={-10}
        initialSlide={1}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FeedbackBalloon />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBalloon />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackBalloon />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
