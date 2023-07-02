'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import hero from '../../assets/hero-img.png'
import hero1 from '../../assets/hero-img-2.png'
import hero2 from '../../assets/hero-img-3.png'

SwiperCore.use([Pagination])

export function SwiperComponent() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg">
            <Image src={hero} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg">
            <Image src={hero1} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg">
            <Image src={hero2} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
        <div className="swiper-pagination">
          <div className="swiper-pagination-bullets">
            <span
              className="custom-bullet"
              style={{ backgroundColor: 'white' }}
            ></span>
            <span className="custom-bullet"></span>
            <span className="custom-bullet"></span>
            {/* ... */}
          </div>
        </div>
      </Swiper>
    </div>
  )
}
