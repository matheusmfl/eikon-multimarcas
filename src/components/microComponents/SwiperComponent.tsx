'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/carrossel.css'

import Image from 'next/image'
import hero from '../../assets/hero-img.png'
import hero1 from '../../assets/hero-img-2.png'
import hero2 from '../../assets/hero-img-3.png'

SwiperCore.use([Pagination])

export function SwiperComponent() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg slide-content">
            <Image src={hero} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg slide-content">
            <Image src={hero1} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[380px] rounded-lg slide-content">
            <Image src={hero2} alt="Imagem rotativa" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
