'use client'
import Image from 'next/image'
// import hero from '../assets/hero-img.png'
import heroText from '../assets/hero-text.svg'
import heroTextMd from '../assets/hero-text-md.svg'
import heroTextXl from '../assets/hero-text-xl.svg'
import marcas from '../assets/hero-marcas.webp'
import { SwiperComponent } from './microComponents/SwiperComponent'
import { CtaButton } from './CtaButton'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <>
      <section className="flex py-10 bg-plastic px-5 md:px-10 xl:items-start xl:px-20 flex-col gap-8 md:gap-12 items-center xl:flex-row">
        {/* Container para XL */}
        <div className="xl:flex xl:flex-col xl:gap-8 xl:w-full">
          {/* Container para responsabilididade */}

          <div className="flex flex-col gap-8 items-center md:flex-row md:items-end xl:items-start ">
            {/* div texto */}
            <motion.div
              className="md:hidden"
              initial={{ x: -1000, y: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
            >
              <Image src={heroText} alt="Texto: Direto da fábrica" />
            </motion.div>
            <motion.div
              className="hidden md:block h-full xl:hidden"
              initial={{ x: -1000, y: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
            >
              <Image
                src={heroTextMd}
                alt="Texto: Direto da fábrica"
                className="border-b-[10px] border-red-600"
              />
            </motion.div>
            <motion.div
              className="hidden md:hidden h-full xl:block"
              initial={{ x: 0, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'tween' }}
            >
              <Image src={heroTextXl} alt="Texto: Direto da fábrica" />
            </motion.div>

            {/* container com imagem */}
            <div className="w-[300px] h-[380px] xl:hidden">
              <SwiperComponent />
            </div>
          </div>

          {/* Container Para responsabilidade */}
          <div className="md:py-8">
            {/* Div texto novamente */}

            <motion.div
              className="flex flex-col md:flex-row gap-20 xl:gap-8 xl:flex-col pt-4"
              initial={{ x: 0, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'tween' }}
            >
              <h2 className="text-3xl font-kanit font-medium tracking-[1.56px] leading-8 text-center xl:text-left text-black">
                compre a <br className="xl:hidden " />
                <span className="text-red-600 font-bold">
                  preço de custo <br />
                </span>{' '}
                camisetas de
                <br className="xl:hidden" /> grandes marcas
              </h2>
              <div className="w-full md:w-[350px] xl:w-[476px]">
                <Image
                  src={marcas}
                  alt="Marcas à quais trabalhamos"
                  width={600}
                  height={600}
                />
              </div>
            </motion.div>
            {/* div de imagens com marcas */}
          </div>

          {/* Div CTA SO existe a partir do MD */}

          <div className="hidden w-full md:flex md:items-start md:justify-start hover:brightness-75 hover:cursor-pointer">
            <CtaButton title="SOLICITAR CATALOGO" />
          </div>
        </div>

        {/* XL Tela Swiper */}
        <motion.div
          className="w-[50%] h-full hidden xl:block"
          initial={{ x: 0, y: 20, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <SwiperComponent />
        </motion.div>
      </section>
    </>
  )
}
