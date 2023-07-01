'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import hero from '../../assets/hero-img.png'
import hero1 from '../../assets/hero-img-2.png'
import hero2 from '../../assets/hero-img-3.png'

export function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, type: 'bullets' }}
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
      ...
    </Swiper>
  )
}
