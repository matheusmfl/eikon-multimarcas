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
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        initialSlide={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slide-content">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
