'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/carrossel.css'

import Image from 'next/image'
import hero from '../../assets/hero-img.jpg'
import hero1 from '../../assets/hero-img-2.jpg'
import hero2 from '../../assets/hero-img-3.jpg'

SwiperCore.use([Pagination])

export function SwiperComponent() {
  return (
    <div className="slider-container xl:translate-x-14">
      <Swiper
        id="first"
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src={hero}
            alt="Imagem rotativa"
            className="rounded-2xl"
            width={540}
            height={540}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hero1}
            alt="Imagem rotativa"
            className="rounded-2xl"
            width={540}
            height={540}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hero2}
            alt="Imagem rotativa"
            className="rounded-2xl object-contain -ml-4 xl:ml-0"
            width={540}
            height={540}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
