'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { FeedbackBalloon } from './FeedbackBalloon'
import '../../style/swiper.css'

SwiperCore.use([Pagination])

export function SwiperFeedback() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        initialSlide={0}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slide-content overflow-y-visible">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content overflow-y-visible">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content overflow-y-visible">
            <FeedbackBalloon />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
